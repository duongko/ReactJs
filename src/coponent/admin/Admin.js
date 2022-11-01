
import Sidebars from "./Sidebar.js";
import { FaBars } from 'react-icons/fa'
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Admin = (props) => {
    const [Collapsed, setCollapsed] = useState(true);
    return (
        <div className="admin-container">

            <div className="admin-sidebar">
                <Sidebars Collapsed={Collapsed} />
            </div>
            <div className="admin-content">

                <div className="admin-header">
                    <FaBars

                        onClick={() => { setCollapsed(!Collapsed) }} />

                </div>
                <div className="admin-main">
                    <Outlet />
                    {/* ấy theo router */}
                </div>

            </div>
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

        </div>
    )
}
export default Admin;