import logo from './logo.svg';
import './App.css';

function App() {

  let post = '진주 냉면 맛집';
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
