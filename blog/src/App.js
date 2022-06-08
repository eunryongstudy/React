import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] =useState(['남자 셔츠 추천', '진주 냉면 맛집', 'React 독학'])
  let [좋아요, 좋아요변경] =useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      
      <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 셔츠 추천';
          글제목변경(copy)}}>글수정
      </button>
      <button onClick={() => {
        글제목.sort(function(a, b){
          a.글제목 > b.글제목 ? 1 : -1
          console.log(b);
        })

      }}>
        정렬
      </button>
      
          
      <div className="list">
        <h4>{글제목[0]} <span onClick={ () => {좋아요변경(좋아요+1)}}>👍</span> {좋아요} </h4>
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
