import ModalCreatuser from "./ModalCreatuser";
import { useEffect, useState } from "react";
import { Getalluser, Getuserphantrang } from "../../../service/apiService";
import Modalupdate from "./Modalupdate";

import TableUser from "./TableUser";
import Modaluserview from "./Modaluserview";
import ModalDelete from "./ModalDelete";
import Tablephantrang from "./Tablephantrang";


const MansUser = (props) => {

    const LIMIT_USER = 7;

    const [listuser, setlistuser] = useState([]);
    const [show, setShow] = useState(false);
    const [userupdate, setuserupdate] = useState([]);
    const [showupdate, setShowupdate] = useState(false);
    const [showview, setShowview] = useState(false);
    const [viewuser, setviewuser] = useState([])
    const [showdelete, setShowdelete] = useState(false);
    const [deleteuser, setdeleteuser] = useState();
    const [pageCount, setPageCount] = useState(0);

    const [currenpage, setcurrenpage] = useState(1)

    useEffect(() => {
        fetlistuserphantrang(1);


    }, [])
    const fetlistuser = async () => {
        let res = await Getalluser();
        console.log(">>>rest", res);
        if (res.EC === 0) {
            setlistuser(res.DT)

        }
    }

    const fetlistuserphantrang = async (page, limit) => {
        let res = await Getuserphantrang(page, LIMIT_USER);
        console.log(">>>rest", res);
        if (res.EC === 0) {
            console.log("res.dt=", res.DT)
            setlistuser(res.DT.users)
            setPageCount(res.DT.totalPages)
        }
    }
    //////////////////////////


    const handleShowupdate = (user) => {
        console.log("data user", user)
        setShowupdate(true)
        setuserupdate(user)
    };

    const handleview = (user) => {
        console.log("data user", user)
        setShowview(true)
        setviewuser(user)

    };
    const handledelete = (user) => {
        console.log("delete data", user)
        setShowdelete(true)
        setdeleteuser(user)

    };
    const handleShow = () => setShow(true);
    return (
        <div className="mansUser">
            <div className="tittle">
                Quản lý người dùng


            </div>
            <div className="User-content">

                <ModalCreatuser fetlistuser={fetlistuser}
                    fetlistuserphantrang={fetlistuserphantrang}

                    show={show}
                    setShow={setShow}
                    handleShow={handleShow}
                    currenpage={currenpage}
                    setcurrenpage={setcurrenpage}
                />
                <Modalupdate show={showupdate}
                    setShow={setShowupdate}
                    userupdate={userupdate}
                    fetlistuser={fetlistuser}
                    setuserupdate={setuserupdate}
                    fetlistuserphantrang={fetlistuserphantrang}
                    currenpage={currenpage}
                    setcurrenpage={setcurrenpage}
                />
                <Modaluserview

                    show={showview}
                    setShow={setShowview}
                    viewuser={viewuser}
                    setviewuser={setviewuser}
                    fetlistuserphantrang={fetlistuserphantrang}
                    currenpage={currenpage}
                    setcurrenpage={setcurrenpage}
                />
                <ModalDelete
                    show={showdelete}
                    setShow={setShowdelete}
                    deleteuser={deleteuser}
                    setdeleteuser={setdeleteuser}
                    fetlistuser={fetlistuser}
                    fetlistuserphantrang={fetlistuserphantrang}
                    currenpage={currenpage}
                    setcurrenpage={setcurrenpage}


                />


            </div>
            <div>
                {/* <TableUser listusers={listuser}

                    handleShowupdate={handleShowupdate}

                    handleview={handleview}
                    handledelete={handledelete}
                /> */}
                <Tablephantrang

                    listusers={listuser}

                    handleShowupdate={handleShowupdate}

                    handleview={handleview}
                    handledelete={handledelete}
                    fetlistuserphantrang={fetlistuserphantrang}
                    pageCount={pageCount}
                    currentPage={currenpage}
                    setcurrenpage={setcurrenpage}


                />
            </div>
        </div>
    )
}
export default MansUser;