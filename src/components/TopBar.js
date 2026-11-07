
class TopBar extends HTMLElement {
    constructor() {
        super();
        

    }
    connectedCallback() {
        this.render();
    }
    render () {
        // this.innerHTML = `
        // <div style = "background-color: #CB904D; margin: 0 auto;">
        //         <center><h2> Shelf Player </h2></center>
        //         <button class="top-bar-btn" id="tb-btn-dashboard" style="height: 7%; width: 10%; background-color: #FFFFB3; border: 0px;"> Dashboard </button>
        //         <button class="top-bar-btn" id="tb-btn-playlistshelf"  style="height: 7%; width: 10%; background-color:#6A381F"; border: 0px"> Playlist Shelf</button>
        //         <button class="top-bar-btn" id="tb-btn-readingschedule" style="height: 7%; width: 15%; background-color: #6A381F"; border: 0px"> Reading Schedule </button>
        // </div>
        // `;
    }
}

customElements.define('top-bar', TopBar);