import logo from './logo.svg';
import './App.scss';
import Mycomponent from './coponent/Mycomponent';
import React from 'react';
import { decreaseCounter, increaseCounter } from './coponent/redux/action/counterAction';
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>

      <h3>hello tất cả các bạn</h3>
      <div>

        <span>count={count} </span>
        <button onClick={() => dispatch(increaseCounter())}>tăng</button>
        <span> </span>
        <button onClick={() => dispatch(decreaseCounter())}>giảm</button>
      </div>
    </>

  )
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
