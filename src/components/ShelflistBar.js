
class ShelflistBar extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
            <h2>Shelflist</h2>

            <input type="search" placeholder="Shelflist Search"/>

            <h4>My Lists</h4>
            <div id="mylist-container">
                <h6>loading...</h6>
            </div>

            <h4>Subscribed Lists</h4>
            <div id="sublist-container">
                <h6>loading...</h6>
            </div>
        `;

    }
}

customElements.define('shelflist-bar', ShelflistBar);