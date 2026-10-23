
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
                <center><h2> Shelf Player </h2></center>
                <button class="top-bar-btn" id="tb-btn-dashboard" style="height: 7%; width: 10%; background-color: white; border: 0px;"> Dashboard </button>
                <button class="top-bar-btn" id="tb-btn-playlistshelf"  style="height: 7%; width: 10%; background-color: orange; border: 0px"> Playlist Shelf</button>
                <button class="top-bar-btn" id="tb-btn-readingschedule" style="height: 7%; width: 15%; background-color: orange; border: 0px"> Reading Schedule </button>
        </div>
        `;
    }
}

customElements.define('top-bar', TopBar);