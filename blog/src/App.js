import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] =useState(['남자 셔츠 추천', '진주 냉면 맛집', 'React 독학'])
  let [좋아요, 좋아요변경] =useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  [1,2,3].map(function(){

  })

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
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }}>
        정렬
      </button>
      
          
      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={ () => {좋아요변경(좋아요+1)}}>👍</span> {좋아요} </h4>
        <p>6월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>6월 8일 발행</p>
      </div>
      <div className="list">
        <h4 onClick= { () => {
          { modal == true ? setModal(false) : setModal(true)}
          }}>{글제목[2]}</h4>
        <p>6월 8일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (<div className="list" key={i}>
          <h4>{ 글제목[i] } <span onClick={ () => {
            let copy = [...좋아요];
            copy[i] = copy[i] + 1;
            좋아요변경(copy)
            }}>👍</span> {좋아요[i]} </h4>
          <p>6월 8일 발행</p>
        </div>)
        })
      }

      {
        modal == true ? <Modal/> : null
      }
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
