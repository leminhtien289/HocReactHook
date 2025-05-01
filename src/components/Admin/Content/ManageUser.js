import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from "./TableUser";
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../services/apiService';
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";

const ManageUser = (prods) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});

    const fetchListUser = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }

    useEffect(() => {
        fetchListUser();
    }, []);

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    };

    const resetUpdateData = () => {
        setDataUpdate({});
    };

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataView(user);
    };

    const resetViewData = () => {
        setDataView({});
    };

    return (
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={(event) => setShowModalCreateUser(true)}>
                        <FcPlus />
                        Add new content
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    resetUpdateData={resetUpdateData}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                    resetViewData={resetViewData}
                />
            </div>
        </div>
    )
}

export default ManageUser;