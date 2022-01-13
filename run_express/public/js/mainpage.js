export default class {
    constructor() {
        document.title = "Main Page";
    }
    async getHtml() {
        return `
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
  <ul class="hidden" id = "menu_list" style="color: #045D8B; border:solid ; border-radius: 1px;">
    <span>자유 게시판</span>
    <span>비밀 게시판</span>
    <span>정보 게시판</span>
    <span>홍보 게시판</span>
    <span>SW 게시판</span>
  </ul>
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
    }
}