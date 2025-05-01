import { useEffect, useState } from 'react';
import { getAllUser } from '../../../services/apiService';

const TableUser = (props) => {

    const [listUser, setListUser] = useState([]);

    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    }

    useEffect(() => {
        fetchListUser();
    }, []);

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className='btn btn-secondary'>View</button>
                                        <button className='btn btn-warning mx-3'>Update</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUser && listUser.length === 0 &&
                        <tr >
                            <td colSpan={'4'}>Not found data</td>
                        </tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser;