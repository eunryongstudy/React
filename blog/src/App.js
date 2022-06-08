import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, b] =useState(['남자 셔츠 추천', '진주 냉면 맛집', 'React 독학'])
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>6월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>6월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>6월 8일 발행</p>
      </div>
    </div>
  );
}

export default App;
