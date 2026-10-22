
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
            <tr><calendar></calendar></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
        </table>
        `;
    }
}

customElements.define('reading-sched-side-bar', ReadingScheduleSideBar);