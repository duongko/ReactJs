import Modalupdate from "./Modalupdate"
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';



// Example items, to simulate fetching from another resources.


const Tablephantrang = (props) => {

    const { listusers, pageCount } = props;

    console.log("pagecount là: ", pageCount)



    const handlePageClick = (event) => {
        props.setcurrenpage(+event.selected + 1)
        props.fetlistuserphantrang(+event.selected + 1)

        console.log(`User requested page number ${event.selected}`);

    };




    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Email</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Role</th>
                        {/* <th scope="col">Image</th> */}
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {listusers.map((value, index) => {
                        return (
                            <tr key={`table-user-${index}`}>
                                <th scope="row">{index + 1}</th>
                                <td>{value.email}</td>
                                <td>{value.username}</td>
                                <td>{value.role}</td>
                                {/* <td>{value.image}</td> */}
                                <td>
                                    <button className="btn btn-secondary" onClick={() => { props.handleview(value) }}>View</button>
                                    <button className="btn btn-warning mx-3 "

                                        onClick={() => { props.handleShowupdate(value) }}
                                    >Update</button>
                                    <button className="btn btn-danger" onClick={() => { props.handledelete(value) }}>Delete</button>
                                </td>
                            </tr>

                        )
                    })}


                </tbody>
            </table>

            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
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
                forcePage={props.currentPage - 1}
            //để chuỷen về trang 1
            />

        </>
    )
}

export default Tablephantrang;