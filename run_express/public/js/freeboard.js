export default function(root) {
    const def = document.createElement("div");
    def.classList.add("free_board");
    def.innerHTML = `
    <form class="" id = "login-form">
    <input 
    required
    maxlength="15"
    type = "text" 
    placeholder="Type your ID" />
    <input type="submit" value="Log In"/>
    </form>`;

    
    //document.body.appendChild(def);
}