import './components/TopBar.js';
import './components/CurrentReadPreview.js'
import './components/ReadingSchedulePreview.js'

import './pages/PageContent.js';
import './pages/Dashboard.js';
import './pages/TBRShelf.js';
import './pages/ReadingSchedule.js';


let selectedPage;

document.addEventListener ("DOMContentLoaded", selectedPage = document.querySelector("#tb-btn-dashboard"));
   
document.querySelectorAll(".top-bar-btn").forEach( (btn) => { btn.addEventListener("click", (e) => {
    if (selectedPage) {selectedPage.style.backgroundColor = "orange";}
    e.target.style.backgroundColor = "white";
    selectedPage = e.target
    var cleanedText = selectedPage.innerText.replace(" ", "").toLowerCase()
    switch (cleanedText) {
        case "dashboard":
            document.querySelector('page-content').innerHTML = `<dashboard-page></dashboard-page>`;            
            break;
        case "tbrshelf":
            document.querySelector('page-content').innerHTML = `<tbr-shelf-page></tbr-shelf-page>`;            
            break;
        case "readingschedule":
            document.querySelector('page-content').innerHTML = `<reading-schedule-page></reading-schedule-page>`;            
            break;
    }
})});