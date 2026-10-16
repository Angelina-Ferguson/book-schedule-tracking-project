
class TopBar extends HTMLElement {
    constructor() {
        super();
        

    }
    connectedCallback() {
        this.render();
    }
    render () {

               
        this.innerHTML = `
        <div style = "background-color: #ebc778; margin: 0 auto;">
                <h2> Bookshelf Planner and Manager </h2>
                <button class="top-bar-btn" id="tb-btn-dashboard" style="height: 7%; width: 10%; background-color: white; border: 0px;"> Dashboard </button>
                <button class="top-bar-btn" id="tb-btn-tbrshelf"  style="height: 7%; width: 10%; background-color: white; border: 0px"> TBR Shelf</button>
                <button class="top-bar-btn" id="tb-btn-readingschedule" style="height: 7%; width: 15%; background-color: white; border: 0px"> Reading Schedule </button>
        </div>
        `;

        


        

    }
}

customElements.define('top-bar', TopBar);