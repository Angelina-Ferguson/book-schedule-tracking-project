import './components/TopBar.js';

import './pages/PageContent.js';
import './pages/Dashboard.js';

let selectedPage;

document.querySelectorAll(".top-bar-btn").forEach( (btn) => { btn.addEventListener("click", (e) => {
    //alert("something clicked");
    if (selectedPage) {selectedPage.style.backgroundColor = "white"}
    e.target.style.backgroundColor = "orange";
    selectedPage = e.target
    //alert(e.target.innerText)
    switch (e.target.innerText) {
        case "Dashboard":
            // run this when content loaded like a domcontentloaded event listener
            document.getElementsByTagName("page-content").innerHTML = `<dashboard-page></dashboard-page>`
            break;
    }
})});