import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Api from './sub/Api';
import Contact from './sub/Contact';
import Router from './sub/Router';
import Detail from './sub/Detail';
import NotFound from './sub/NotFound';


function App() {
  return (
    <>
      <Header />
      {/* 주소마다 변경될 콤포넌트를 Routes안에 Route로 감싸서 넣어준다. */}
      {/* Routers태그안에 내용은 화면에 출력은 되지않고 url 출력시 url 주소에 해당 주소값을 입력시 일치하는 주소에 해당하는 컴포넌트를 출력한다. */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/api' element={<Api />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/movie_detail/:id' element={<Detail />} />
        <Route path='/router' element={<Router />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
