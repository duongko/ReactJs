
import { Route, Routes, useNavigate } from "react-router-dom"
import Admin from './coponent/admin/Admin';
import Home from './coponent/home/Home';
import Dashboard from './coponent/admin/content/Dashboard';
import MansUser from './coponent/admin/content/MansUser';
import Login from './coponent/Auth/Login';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./coponent/Auth/Signup";
import Listquit from "./coponent/user/Listquit";
import Detailquiz from "./coponent/user/Detailquiz";

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                </p>
                <button className="btn btn-primary" onClick={() => navigate("/")}>Go Home</button>
            </div>
        </div>
    )
}
const Layout = (props) => {
    return (
        //phân bố bố cục
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route
                        path="users"
                        element={<Listquit />}
                    />

                    <Route index element={<Home />} />
                    {/* 
                    route con sẽ vào phần Outlet của Route cha */}
                </Route>

                <Route
                    path="/quiz/:id"
                    element={<Detailquiz />}
                />


                <Route path="/admin" element={<Admin />} >
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="MansUser" element={<MansUser />} />
                    <Route index element={<Dashboard />} />



                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                <Route path='*' exact={true} element={<NotFound />} />


            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />

        </>
    )
}

export default Layout