export default function(root) {
    document.title = "LogIn Page";

    const def = document.createElement("div");
    def.classList.add("LogInPage");
    def.innerHTML = `
    <form class="" id = "login-form">
    <input 
    required
    maxlength="15"
    type = "text" 
    placeholder="Type your ID" />
    <input type="submit" value="Log In"/>
    </form>`;

    const prevreload = document.querySelector(".LogInPage");
    if(prevreload){
        document.body.removeChild(prevreload);
    }
    
    document.body.appendChild(def);
}