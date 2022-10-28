
import Sidebars from "./Sidebar.js";
import { FaBars } from 'react-icons/fa'
import { useState } from "react";


const Admin = (props) => {
    const [Collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">

            <div className="admin-sidebar">
                <Sidebars Collapsed={Collapsed} />
            </div>
            <div className="admin-content">
                <FaBars

                    onClick={() => { setCollapsed(!Collapsed) }} />
            </div>
        </div>
    )
}
export default Admin;