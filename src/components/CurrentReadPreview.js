
class CurrentReadPreview extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render () {
        this.innerHTML = `
        <div style = "background-color: #cf6519; margin: 4 auto; padding: 10px 50px 20px; border-radius: 10px">
                <h2 style = "text-align: center;" > Currently Reading </h2>
                <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9w-F0jAvmgfrWgCyRtqWcb9eN5PubciMW1ElbmHvaj3NnGV9ol-V3VWUsZU8eYNXqy7LBapsZ5d3vwYbFtFY2AhVNWY2kR0ILL198F5-tkJF0nOlif7Se&usqp=CAc" />
                <h3> Crown Me Dead by Liv Zander</h3>
                <h4> Started: October 14 2026 </h4>
                <h4> Progress: 37%</h4>
                <button>Log your progres</button>  
        </div>
        `;
    }
}

customElements.define('curr-read-preview', CurrentReadPreview);