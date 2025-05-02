import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';

const TableUserPaginate = ({ listUsers, handleClickBtnUpdate, handleClickBtnView, handleClickBtnDelete, fetchListUsersWithPaginate, pageCount }) => {

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        fetchListUsersWithPaginate(+event.selected + 1);
    };

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button
                                            className='btn btn-secondary'
                                            onClick={() => handleClickBtnView(item)}
                                        >
                                            View
                                        </button>
                                        <button
                                            className='btn btn-warning mx-3'
                                            onClick={() => handleClickBtnUpdate(item)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => handleClickBtnDelete(item)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 &&
                        <tr >
                            <td colSpan={'4'}>Not found data</td>
                        </tr>}
                </tbody>
            </table>
            <div className='user-pagination d-flex justify-content-center'>
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}

export default TableUserPaginate;