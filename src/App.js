import logo from './logo.svg';
import './App.css';
import Mycomponent from './coponent/Mycomponent';
import React from 'react';

class App extends React.Component {
  render() {
    return (

      <div>
        <h3>hello tất cả các bạn</h3>
        <Mycomponent />

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
