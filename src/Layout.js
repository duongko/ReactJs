
import { Route, Routes } from "react-router-dom"
import User from './coponent/user/User';
import Admin from './coponent/admin/Admin';
import Home from './coponent/home/Home';
import Dashboard from './coponent/admin/content/Dashboard';
import MansUser from './coponent/admin/content/MansUser';
import Login from './coponent/Auth/Login';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = (props) => {
    return (

        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route
                        path="users"
                        element={<User />}
                    />

                    <Route index element={<Home />} />
                </Route>
                <Route path="/admin" element={<Admin />} >
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="MansUser" element={<MansUser />} />
                    <Route index element={<Dashboard />} />



                </Route>
                <Route path="/login" element={<Login />} />


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