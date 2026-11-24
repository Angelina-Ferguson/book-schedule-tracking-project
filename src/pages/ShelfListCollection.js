
class ShelflistCollection extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
            <h1>My Shelf List Collection <button class="addList">+ New Shelf List</button></h1>
            <div class="next-up-container">
                <next-in-queue></next-in-queue>
                <list-preview></list-preview>
            </div>
            
        `;

    }
}

customElements.define('shelf-list-collection', ShelflistCollection);


