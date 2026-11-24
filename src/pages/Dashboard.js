
class Dashboard extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
            <div id="shelflist-bar"><shelflist-bar></shelflist-bar></div>
                <div id="main-view-column">
                    <div id="current-read"><current-read></current-read></div>
                    <div id="main-viewer"><shelf-list-collection></shelflist-collection></div>
                </div>
            <div id="stat-alert-bar"><stat-alert-bar></stat-alert-bar></div>
        `;

    }
}

customElements.define('dashboard-page', Dashboard);