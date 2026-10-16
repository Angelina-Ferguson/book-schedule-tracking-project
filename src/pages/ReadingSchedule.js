
class ReadingSchedule extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
        <p>This is the Reading Schedule</p>
        `;

    }
}

customElements.define('reading-schedule-page', ReadingSchedule);