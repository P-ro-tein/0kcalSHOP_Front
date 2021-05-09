export default function Nsearch() {
    return (
    <div>
        공지사항 조회 (조회 및 삭제, 검색/정렬 구현 <br/>

        <input type="text" value=""/>
        <input type="submit" value="검색"/>

        <table>
            <colgroup>
                <col width="50"/>
                <col width="300"/>
                <col width="200"/>
            </colgroup>
            <thead>
                <tr>
                    <th><input type="checkbox" name="check" id="checkboxAll" /></th>
                    <th>번호</th>
                    <th>공지사항 제목</th>
                    <th>진행기간</th>
                </tr>
            </thead>
            <tbody>
                <td align="center">
                    <input type="checkbox" name="check"/>
                </td>
                <td align="center"> 1 </td>
                <td align="center"> <a href="test.html">임시 아무말</a></td>
                <td align="center">2021.04.07~2021.04.10</td>
            </tbody>
        </table>

        <button id="modify">수정</button><span> &nbsp; </span>
        <button id="delete">삭제</button>
    </div>
    )
}