
import Sidebars from "./Sidebar.js";
import { FaBars } from 'react-icons/fa'
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


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

                </div>

            </div>
        </div>
    )
}
export default Admin;