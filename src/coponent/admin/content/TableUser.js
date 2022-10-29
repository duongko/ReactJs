import { useEffect, useState } from "react";
import { Getalluser } from "../../../service/apiService";

const TableUser = () => {

    const [listuser, setlistuser] = useState([])

    useEffect(() => {
        fetlistuser();

    }, [])
    const fetlistuser = async () => {
        let res = await Getalluser();
        console.log(">>>rest", res);
        if (res.EC === 0) {
            setlistuser(res.DT)
        }
    }
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">email</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Role</th>
                        {/* <th scope="col">Image</th> */}
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {listuser.map((value, index) => {
                        return (
                            <tr key={`table-user-${index}`}>
                                <th scope="row">{index + 1}</th>
                                <td>{value.email}</td>
                                <td>{value.username}</td>
                                <td>{value.role}</td>
                                {/* <td>{value.image}</td> */}
                                <td>
                                    <button className="btn btn-secondary">View</button>
                                    <button className="btn btn-warning mx-3 ">Update</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>

                        )
                    })}


                </tbody>
            </table>

        </>
    )
}

export default TableUser;