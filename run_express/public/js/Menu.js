const menuButton = $.querySelector("#menu_button button");
const menuList = $.querySelector("#menu_list")

function openClose(event){
    //event.preventDefault();
    if(menuList.className === "hidden"){
        menuList.className = "";
    }else {
        menuList.className = "hidden"
    }
}

menuButton.addEventListener("click", openClose);