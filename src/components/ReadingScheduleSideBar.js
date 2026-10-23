
class ReadingScheduleSideBar extends HTMLElement {
    constructor() {
        super();
        

    }
    connectedCallback() {
        this.render();
    }
    render () {
        this.innerHTML = `
        <table>
            <tr><td><h4>Enable a Reading Playlist Below</h4></td></tr>
            <tr><td><input type="search" placeholder="Search Playlists"/></td></tr>
        </table>
        `;
    }
}

customElements.define('reading-sched-side-bar', ReadingScheduleSideBar);