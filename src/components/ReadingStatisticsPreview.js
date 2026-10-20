
class ReadingStatisticsPreview extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render () {
        this.innerHTML = `
        <div style = "background-color: #f57b46; margin: 4 auto; padding: 10px 50px 20px; border-radius: 10px">
                <h2 style = "text-align: center;" > Reading Statistics Preview </h2>
                You read at a rate of:
                20 pages a day,
                0.5 books a week
        </div>
        `;
    }
}

customElements.define('read-stat-preview', ReadingStatisticsPreview);