
export default function(root) {
  document.title = "HomePage";

  
  const def = document.createElement("div");
  def.classList.add("MainPage");
  def.innerHTML = `
<body>
<header>
  <div class = "TopSide">
    <div id = "menu_button">
      <button>
      ☰
      </button>
    </div>
    <div id = "title">
      <a>
        AJOU Memo
      </a>
    </div>
    <div id = "login_button">
      <button>
      Log_In🔒
      </button>
    </div>
  </div>
</header>

  <div class = "body_button">
    <button class = "button_fb">
      자유게시판
    </button>
    <button class = "button_regist">
    등록하기
    </button>
  </div>
  
  <div class = "table">
    <div class = "text_list">
      <p><span class = "date">12/18</span><a href = "#">아주 비기너 참여하시는 ..</a><span class = "editor_name">익명</span></p>
      <p><span class = "date">12/18</span><a href = "#">아주 비기너 참여하시는 ..</a><span class = "editor_name">익명</span></p>
      <p><span class = "date">12/18</span><a href = "#">아주 비기너 참여하시는 ..</a><span class = "editor_name">익명</span></p>
      <p><span class = "date">12/18</span><a href = "#">아주 비기너 참여하시는 ..</a><span class = "editor_name">익명</span></p>
      <p><span class = "date">12/18</span><a href = "#">아주 비기너 참여하시는 ..</a><span class = "editor_name">익명</span></p>
      <p><span class = "date">12/18</span><a href = "#">아주 비기너 참여하시는 ..</a><span class = "editor_name">익명</span></p>
    </div>
  </div>
  
<footer>
  <div class = "page_num">
    <div class = "page_button"><a href="#">1</a></div>
    <div class = "page_button"><a href="#">2</a></div>
    <div class = "page_button"><a href="#">3</a></div>
    <div class = "page_button"><a href="#">4</a></div>
    <div class = "page_button"><a href="#">5</a></div>
  </div>
</footer>
        `;


        const prevreload = document.querySelector(".MainPage");
        if(prevreload){
            document.body.removeChild(prevreload);
        }
        document.body.appendChild(def);


        const menuButton = document.querySelector("#menu_button");
        const navdoc = document.querySelector("nav");

        function showMenuBar(event){//메뉴 바 보여주고 숨겨주는 함수
          event.preventDefault();
          if(navdoc.classList.value === "hidden"){
            navdoc.classList.remove("hidden");
          } else{
            navdoc.classList.add("hidden");
          };
        }

        //console.log(navdoc.classList.value);

        menuButton.addEventListener("click", showMenuBar);
}
