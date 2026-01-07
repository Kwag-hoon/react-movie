import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';


function Router(props) {
  const productId = useParams().productId;  // 파라미터 생성 
  //  예)

  const location = useLocation(); // url 정보를 가져온다.
  const navigate = useNavigate(); //이전, 다음 

  return (
    <main>
      <h3>리액트 라우터 상세 설명 - 서브페이지 </h3>
      <p> Route = 페이지 이동 </p>
      <p> 라우팅이란? 사용자가 요청한 url에 따라 해당 url주소로 페이지를 이동하는 것이다. </p>
      <p>리액트에서는  </p>
      <p>리액트는 ....</p>
      <p>React-Router-Dom 은 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리이다. </p>
      <h3>1. 리액트 라우터 (React Router)</h3>
      <ul>
        <li>사용자가 입력한 주소를 감지하는 역할을 하며, 여러 환경에서 동작할 수 있도록 여러 종류의 라우터 컴포넌트를 제공하낟. </li>
        <li>가장 많이 사용하는 라우터 콤포넌트는 BrowserRouter, HashRouter이다. </li>
        <li>BrowserRouter : html5를 지원하는 브라우저의 주소를 감지</li>
        <li>HashRouter : html5를 지원하지 않는 브라우저의 주소를 감지</li>
        <li>설치시 npm i react-router-dom 명령어로 설치하고 프로젝트 시작 </li>
      </ul>

      <h3>2. 리액트 라우터 관련태그</h3>
      <ul>
        <li>BrowserRouter : 콤포넌트를 감싸는 영역으로 주로 메뉴나 헤더를 감싼다. </li>
        <li>여러 Ruter를 감싸서 그중에 규칙이 일치하는 라우트 단 하나를 렌더링 시키는 역할 </li>
        <li>Route: path속성에 경로, element속성에 콤포넌트를 넣어주고 여러 라우팅을 매칭하고 싶은 경우에 url뒤에 '*'를 붙여준다. </li>
        <li>Link = html5의 a태그와같다. 미리보기시 a태그로 변환된다. </li>
      </ul>
      <p>{productId}번 페이지입니다. </p>
      <ul>
        <li>hash : {location.hash}</li>
        <li>pathname : {location.pathname}</li>
        <li>search : {location.search}</li>
        <li>state : {location.state}</li>
        <li>key : {location.key}</li>

      </ul>

      <p>useNavigate를 사용하여 페이지 버튼 만들기 </p>
      <ul>
        <li><button onClick={()=>navigate(-2)}>뒤로 2페이지 이동 </button></li>
        <li><button onClick={()=>navigate(-1)}>뒤로 1페이지 이동 </button></li>
        <li><button onClick={()=>navigate(1)}>앞으로 1페이지 이동 </button></li>
        <li><button onClick={()=>navigate(2)}>앞으로 2페이지 이동 </button></li>
        <li><button onClick={()=>navigate('/')}>홈(첫페이지)으로 이동 </button></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </main>
  );
}

export default Router;