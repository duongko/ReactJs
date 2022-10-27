
import './App.scss';
import Header from './coponent/header/Header';
import { Link, Outlet } from "react-router-dom";


// class App extends React.Component {
//   render() {
//     return (
//       <>

//         <h3>hello tất cả các bạn</h3>
//         <Mycomponent />
//       </>

//     )
//   }








// }

const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />

      </div>
      <div>DƯƠNG ALO</div>
      <div className='content-container'>

        <Outlet />
      </div>





    </div >
  );
}
export default App;
