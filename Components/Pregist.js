export default function Pregist() {
    return(
        <div>
            <form method="POST">
            <table>
                <td>상품명</td>
                <td><input type="text" name="title"/></td>
                <tr>
                        <td>카테고리명</td>
                        <td>
                            <select name="description">
                                <option>식단세트</option>
                                <option>식사대용</option>
                                <option>건강간식</option>
                                <option>차/음료/두유</option>
                                <option>오일/소스/향신료</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>가격</td>
                        <td><input type="number" name="price"/></td>
                    </tr>
                    <tr>
                        <td>등록상태</td>
                        <td>
                            <select name="state">
                                <option>판매 가능</option>
                                <option>판매 완료</option>
                                <option>상품 준비중</option>
                            </select>
                        </td>
                    </tr>
            </table>
                대표이미지<br/>
                    <input type="file" name="image" accept="img/*"/><br/><br/>
                상품 상세설명 <br/><input type="text" name="product_detail"/><br/><br/>
                <input type="submit" value="등록"/>
            </form>
        </div>
    )
}