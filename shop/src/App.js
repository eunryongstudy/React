import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar }  from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/detail.js';

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">


      





       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">은룡shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={<>
          <div className='main-bg'></div>
          <div className="container">
            <div className="row">
            <상품 shoes = {shoes}/>
          </div>
          </div> 
        </>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<About />} />
        </Route>
        <Route path="/event" element={<>
        <div>오늘의 이벤트</div>
        <Outlet></Outlet>
        </>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
      </Routes>

      

      
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function 상품(props) {
  return (
    props.shoes.map (function(a, i){
      return(
        <div className="col-md-4" key={i}>
          <img src={"https://codingapple1.github.io/shop/shoes"+(i+1)+".jpg"} width="80%"/>
          <h4>{props.shoes[i].title}</h4>
          <p>{props.shoes[i].content}</p>
          <p>가격: {props.shoes[i].price}</p>
          
    </div>
      )
      
    })
    
  )
}



export default App;
