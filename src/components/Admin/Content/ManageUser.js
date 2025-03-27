import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';

const ManageUser = (prods) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>
            <div className="users-content">
                <div>
                    <button>Add new content</button>
                </div>
                <div>
                    table Users
                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default ManageUser;