import ModalCreatuser from "./ModalCreatuser";
import { useEffect, useState } from "react";
import { Getalluser } from "../../../service/apiService";
import Modalupdate from "./Modalupdate";

import TableUser from "./TableUser";
import Modaluserview from "./Modaluserview";
import ModalDelete from "./ModalDelete";

const MansUser = (props) => {

    const [listuser, setlistuser] = useState([])
    const [show, setShow] = useState(false);
    const [userupdate, setuserupdate] = useState([])
    const [showupdate, setShowupdate] = useState(false);
    const [showview, setShowview] = useState(false);
    const [viewuser, setviewuser] = useState([])
    const [showdelete, setShowdelete] = useState(false);
    const [deleteuser, setdeleteuser] = useState()

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
                    show={show}
                    setShow={setShow}
                    handleShow={handleShow} />
                <Modalupdate show={showupdate}
                    setShow={setShowupdate}
                    userupdate={userupdate}
                    fetlistuser={fetlistuser}
                    setuserupdate={setuserupdate}
                />
                <Modaluserview

                    show={showview}
                    setShow={setShowview}
                    viewuser={viewuser}
                    setviewuser={setviewuser}
                />
                <ModalDelete
                    show={showdelete}
                    setShow={setShowdelete}
                    deleteuser={deleteuser}
                    setdeleteuser={setdeleteuser}
                    fetlistuser={fetlistuser}


                />


            </div>
            <div>
                <TableUser listusers={listuser}

                    handleShowupdate={handleShowupdate}

                    handleview={handleview}
                    handledelete={handledelete}
                />
            </div>
        </div>
    )
}
export default MansUser;