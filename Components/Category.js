import { Link } from "react-router-dom";
import './Category.css';

export default function Category() {
    return (
        <ul>
            <li><Link to="/nsearch">공지사항/이벤트 조회</Link></li>
            <li><Link to="/nregist">공지사항/이벤트 등록</Link></li>
            <li><Link to="/psearch">상품 조회</Link></li>
            <li><Link to="/pregist">상품 등록</Link></li>
        </ul>
    )
}