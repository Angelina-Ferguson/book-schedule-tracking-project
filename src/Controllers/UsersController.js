//drizzle / db imports
import 'dotenv/config.js'
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { eq } from 'drizzle-orm';
import { users, playlists, books, authors } from '../db/schema.js';

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || "3306", 10)
});



export function createUser(user) {
    const db = drizzle(connection);
    db.insert(users).values(user);
    console.log("user created: ", user.username)
}

export function getUsers() {
    const db = drizzle(connection);
    return db.select().from(users);
}

export function isValidUser(credentials) {
    const db = drizzle(connection);
    const result = db.select(credentials.username, credentials.password).from(users)
    if (result.length > 0 ){
      return 1;
    }
    return 0;

}