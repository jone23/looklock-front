import React  from "react";
import {Link} from 'react-router-dom';

const TestButton = (props) => {
    return (
        <>
        <Link to="/memo">
        <button type="button">서버-프론트 연결 / Memo 예제 보러가기</button>
        </Link>
        </>
    )
}

export default TestButton;