import ModalCreatuser from "./ModalCreatuser";
import { useEffect, useState } from "react";
import { Getalluser } from "../../../service/apiService";
import Modalupdate from "./Modalupdate";

import TableUser from "./TableUser";

const MansUser = (props) => {

    const [listuser, setlistuser] = useState([])
    const [show, setShow] = useState(false);
    const [userupdate, setuserupdate] = useState([])

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

    const [showupdate, setShowupdate] = useState(false);
    const handleShowupdate = (user) => {
        console.log("data user", user)
        setShowupdate(true)
        setuserupdate(user)
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
                />


            </div>
            <div>
                <TableUser listusers={listuser}

                    handleShowupdate={handleShowupdate} />
            </div>
        </div>
    )
}
export default MansUser;