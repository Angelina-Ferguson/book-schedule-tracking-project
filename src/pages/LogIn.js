
class LogIn extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
        
         <div>
            <h3>Welcome to</h3>
            <h2>Shelf List</h2>
            <input id="username-input" type="text" placeholder="Username" required/>
            <input id="password-input" type="password" placeholder="Password" required/>
            <input id="log-in-btn" type="submit" value="Log In" name="Log In"/>
            <input id="new-acct-btn" type="submit" value="Create New Account"name="Create New Account"/>
         </div>
        `;

    }
}

customElements.define('log-in-page', LogIn);