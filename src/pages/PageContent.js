

class PageContent extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
            <div id="page-content">
                <div id="shelflist-bar"><shelflist-bar></shelflist-bar></div>
                <div id="main-view-column">
                    <div id="current-read"></div>
                    <div id="main-viewer"></div>
                </div>
                <div id="stat-alert-bar"><stat-alert-bar></stat-alert-bar></div>
            </div>
        `;

    }
}

customElements.define('page-content', PageContent);