import SideBar from "./sidebar";
import './admin.scss'
import { FaBars } from "react-icons/fa";
import { useState } from "react";


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <FaBars onClick={() => setCollapsed(!collapsed)}></FaBars>
                content go here
            </div>
        </div>
    )
}

export default Admin;