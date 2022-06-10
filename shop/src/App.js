import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar }  from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">은룡shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className="container">
        <div className="row">
        <상품 shoes = {shoes}/>
      </div>
      </div> 

      
    </div>
  );
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
