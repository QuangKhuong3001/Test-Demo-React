import ModalCreateUser from "./modalcreateuser";
import './manageuser.scss'
import { FcPlus } from 'react-icons/fc'
import { useEffect, useState } from "react";
import TableUser from "./tableuser";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./modalupdateuser";

const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetchListUser();
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUsers();
        console.log(res);
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                User Management
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary"
                        onClick={() => setShowModal(true)}>
                        <FcPlus /> Add new user
                    </button>
                </div>
                <div className="table-user-container">
                    <TableUser listUser={listUser} />
                </div>
                <ModalCreateUser show={showModalCreateUser} setShowModalCreateUser={setShowModalCreateUser} fetchListUser={fetchListUser} />
                <ModalUpdateUser show={showModalUpdateUser} setShowModalUpdateUser={setShowModalUpdateUser} fetchListUser={fetchListUser} />
            </div>
        </div >
    )
}

export default ManageUser;