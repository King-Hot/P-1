const $ = document;
const loginButton = $.querySelector("#login_button button");

function loginClicked(event){
    event.preventDefault();//브라우저의 기본동작 실행 X
    const lgi = "Log_In🔒";
    const lgO = "Log_Out🔓";
    if(loginButton.innerText === lgi){
        loginButton.innerText = lgO;
    }else{
        loginButton.innerText = lgi;
    }
    
}

loginButton.addEventListener("click", loginClicked);
