import ModalCreateUser from "./modalcreateuser";


const manageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                User Management
            </div>
            <div className="manage-user-content">
                <div>
                    <button>
                        Add new user
                    </button>
                </div>
                <div>
                    Table
                    <ModalCreateUser />
                </div>
            </div>
        </div >
    )
}

export default manageUser;