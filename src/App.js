import logo from './logo.svg';
import './App.css';
import Mycomponent from './components/Mycomponent';
import React from 'react';

class App extends React.Component {

  state = {
    name: 'dương',
    age: '23',
  }

  handelclick(event) {
    // console.log('cảm ơn bạn rất nhiều')
    console.log(event)
    console.log("tên tôi là :", this.state.name)
    this.setState({
      name: "minh anh"

      ///hàm setState là hàm giúp cập nhập/thaydoi  của thằng state
    })
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        my name is {this.state.name}

        <button onClick={(event) => { this.handelclick(event) }}>click me</button>
      </div>
    )
  }









}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//           <Mycomponent />
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
