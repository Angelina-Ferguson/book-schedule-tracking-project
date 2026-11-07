//components
import './components/TopBar.js';
import './components/calendar.js';
import './components/CurrentReadPreview.js'
import './components/ReadingScheduleSideBar.js'
import './components/ReadingSchedulePreview.js'
import './components/LibraryAlerts.js'
import './components/ReadingStatisticsPreview.js'
import './components/PlaylistCard.js'

import './components/ShelflistBar.js'
import './components/StatAlertBar.js'

// pages
import './pages/PageContent.js';
import './pages/Dashboard.js';
import './pages/PlaylistShelf.js';
import './pages/ReadingSchedule.js';

let selectedPage;

document.addEventListener ("DOMContentLoaded", selectedPage = document.querySelector("#tb-btn-dashboard"));
   
document.querySelectorAll(".top-bar-btn").forEach( (btn) => { btn.addEventListener("click", (e) => {
    if (selectedPage) {selectedPage.style.backgroundColor = "#6A381F";}
    e.target.style.backgroundColor = "#FFFFB3";
    selectedPage = e.target
    var cleanedText = selectedPage.innerText.replace(" ", "").toLowerCase()
    switch (cleanedText) {
        case "dashboard":
            document.querySelector('page-content').innerHTML = `<dashboard-page></dashboard-page>`;            
            break;
        case "playlistshelf":
            document.querySelector('page-content').innerHTML = `<playlist-shelf-page></playlist-shelf-page>`;            
            break;
        case "readingschedule":
            document.querySelector('page-content').innerHTML = `<reading-schedule-page></reading-schedule-page>`;            
            break;
    }
})});