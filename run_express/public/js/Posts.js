export default function(root) {
    const def = document.createElement("div");
    def.classList.add("PostPage");
    def.innerHTML = `
    <tr>
                <th>
                    글쓰기
                </th>
            </tr>
            <tr>
                <td >
                    <input type="text" placeholder="제목을 입력하세요."
                    maxlength=20
                    >
                </td>
            </tr>
            <tr>
                <td>
                    <textarea placeholder="내용을 입력하세요." style="width: 100%; height: 100%"></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button" value="글쓰기">
                    <input type="button" value="목록으로">
                </td>
    </tr>`;

    const prevreload = document.querySelector(".PostPage");
        if(prevreload){
            document.body.removeChild(prevreload);
        }

    document.body.appendChild(def);
}