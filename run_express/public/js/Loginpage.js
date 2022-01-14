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

    const loginButton = document.querySelector("#login_button");
    //console.dir(loginButton);

    function showLoginPage(event){//로그인 버튼 누를 시 로그인 페이지를 보여주는 함수
        event.preventDefault();

    };

    loginButton.addEventListener("click", showLoginPage);
    
    document.body.appendChild(def);
}

/*
        function showMenuBar(event){
          event.preventDefault();
          if(navdoc.classList.value === "hidden"){
            navdoc.classList.remove("hidden");
          } else{
            navdoc.classList.add("hidden");
          };
        }

        //console.log(navdoc.classList.value);

        menuButton.addEventListener("click", showMenuBar);
*/