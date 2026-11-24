
class CurrentRead extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render () {
        this.innerHTML = `
        <div>
                <table>
                <tr>
                    <td><h4>Now Reading</h4></td>
                    <td> <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9w-F0jAvmgfrWgCyRtqWcb9eN5PubciMW1ElbmHvaj3NnGV9ol-V3VWUsZU8eYNXqy7LBapsZ5d3vwYbFtFY2AhVNWY2kR0ILL198F5-tkJF0nOlif7Se&usqp=CAc" /></td>
                    <td>
                        <h5> Crown Me Dead </h5>
                        <h5> by Liv Zander</h5>
                        
                    </td>

                </tr>
                <tr>
                    <td>
                        <h5> Started: October 14 2026 </h5>
                        
                        
                    </td>
                    <td>
                        <h5> Progress: 37%</h5>
                    </td>
                    <td>
                    <button>Log your progres</button>  
                    </td>
                </tr>
                </table>
                
                
        </div>
        `;
    }
}

customElements.define('current-read', CurrentRead);