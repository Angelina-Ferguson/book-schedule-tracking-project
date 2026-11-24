
class AddShelfList extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
            <table>
            <tr>
                <td rowspan="2"><div class="shelf-cover addList"> + Add Shelflist Cover Image</div></td>
                <td>
                    <h1>Add Shelf List</h1>
                </td>
                <td><button>cancel</button></td>
            </tr>
            <tr>
                
                <td>
                    <table>
                    <tr>
                    <td><label>Shelf List Name</label></td>
                    <td><input type="text"></input></td>
                    </tr>
                    <tr>
                    <td><label>Description</label></td>
                    <td><textarea></textarea></td>
                    </tr>
                    </table>
                <td></td>
            </tr>
            <tr>
                <td colspan="3">
                <button>+ Add Book</button>
                <table id="book-table">
                    <thead>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date Added</th>
                    </thead>
                    <tr>
                        <td></td>
                        <td>Loading...</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>
            
            
            
            
        `;

    }
}

customElements.define('add-shelf-list', AddShelfList);


