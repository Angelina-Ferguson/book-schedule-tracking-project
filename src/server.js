import 'dotenv/config';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = 5000;

const server = http.createServer((req, res) => {
    // 1. Set CORS headers manually so your frontend HTML can communicate with it
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request (browser safety check)
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // 2. Check the URL route and HTTP method
    if (req.url === '/' && req.method === 'GET') {

        const __filename = fileURLToPath(import.meta.url);
        //const __dirname = path.dirname(__filename);
        const filePath = path.join('public', 'index.html'); 

         fs.readFile(filePath, (err, content) => {
            if (err) {
                console.error("File Read Error:", err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Internal Server Error: Could not read index.html at ${filePath}`);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (req.url.includes('/public/') && req.method === 'GET') {
        const filePath = path.join('public', req.url.replace('/public/', ''));
        fs.readFile(filePath, (err, content) => {
            if (err) {
                console.error("File Read Error:", err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Internal Server Error: Could not read file at ${filePath}`);
            } else {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(content);
            }
        });
    
    } else if (req.url.includes('/src/') && req.method === 'GET') {
        const filePath = path.join('src', req.url.replace('/src/', ''));
        fs.readFile(filePath, (err, content) => {
            if (err) {
                console.error("File Read Error:", err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Internal Server Error: Could not read file at ${filePath}`);
            } else {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(content);
            }
        });
    
    } 
    else if (req.url === '/routes/') {
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        
        // const responseData = {
        //     message: "Hello from pure Node.js (No Express!)",
        //     timestamp: new Date().toLocaleTimeString()
        // };

        // res.end(JSON.stringify(responseData));
    } 
    // 3. Handle 404 Not Found
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});


server.listen(PORT, '0.0.0.0', () => {
    console.log(`Pure Node.js server running at http://localhost:${PORT}`);
});



// async function main() { 
    // console.log("---------------in main!")
    // const user = {
    //     username: "admin0",
    //     password: "Admin123",
    //     email: "angelinatoste@gmail.com",
    //     subscribed_shelflist_ids: "{'123'}", 
    //     avatar_photo: null,
    //     bio: null,
    // }
    // console.log("---------------creating a user...")
    // UsersController.createUser(user)
    

// console.log("looking for existing users:")
//   const users2 = getUsers();
//   console.log(users2)
//   console.log('New user created!')
// console.log("--3-------------in main!")
//   users_db = await db.select().from(users);
//   console.log('Getting all users from the database: ', users)

//   await db
//     .update(users)
//     .set({
//       username: "admin1",
//     })
//     .where(eq(users.email, user.email));
//   console.log('User info updated!')

//   await db.delete(users).where(eq(users.email, user.email));
//   console.log('User deleted!')
// }

// main();
