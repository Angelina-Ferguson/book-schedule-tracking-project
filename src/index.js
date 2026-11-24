//components
import './components/TopBar.js';
import './components/calendar.js';
import './components/ReadingScheduleSideBar.js'

import './components/LibraryAlerts.js'
import './components/ReadingStatisticsPreview.js'
import './components/PlaylistCard.js'


//Layout Component
import './components/ShelflistBar.js'
import './components/StatAlertBar.js'

//Widget Component
import './components/CurrentRead.js'
import './components/NextInQueue.js'
import './components/ListPreview.js'

// pages
import './pages/ShelfListCollection.js'
import './pages/AddShelfList.js'
import './pages/PageContent.js'
import './pages/LogIn.js'
import './pages/Dashboard.js';
import './pages/PlaylistShelf.js';
import './pages/ReadingSchedule.js';
   


document.querySelectorAll("shelf-list-collection .addList").forEach((item)=>{ item.addEventListener("click", (e) =>{
    
    document.querySelector('shelf-list-collection').innerHTML = `<add-shelf-list></add-shelf-list>`;
}) })

async function login () {
    const api_url = `http://localhost:8888/routes/login`
    fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({  
            username: document.querySelector("#username-input").value,
            password: document.querySelector("#password-input").value 
        }),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));

}


document.querySelector("page-content #log-in-btn").addEventListener("click", async (e) => {
    login()
});