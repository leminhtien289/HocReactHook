import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (prods) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                ManageUser
            </div>
            <div classNameName="users-content">
                <div>
                    <button>Add new content</button>
                </div>
                <div>
                    table Users
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}

export default ManageUser;