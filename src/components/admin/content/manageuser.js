import ModalCreateUser from "./modalcreateuser";
import './manageuser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState } from "react";

const ManageUser = (props) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="title">
                User Management
            </div>
            <div className="manage-user-content">
                <div>
                    <button className="btn btn-primary"
                        onClick={() => setShowModal(true)}>
                        <FcPlus /> Add new user
                    </button>
                </div>
                <div className="table-user-container">
                    Table
                </div>
                <ModalCreateUser show={showModal} setShow={setShowModal} />
            </div>
        </div >
    )
}

export default ManageUser;