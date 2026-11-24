
class ShelflistBar extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
            <h3>My Account <image src="./public/images/token_1.png"/></h3>
            <button>View Reading Queue</button>
            <div class="stat">Books This Year</div>
            <div class="stat">Books This Month</div>
            <div class="stat">Reading Speed</div>
            <div class="alert">Library Alerts</div>
            <div class="alert">Release Alerts</div>
        `;

    }
}

customElements.define('stat-alert-bar', ShelflistBar);