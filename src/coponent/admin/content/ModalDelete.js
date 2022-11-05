import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash'
import { Deleteuser } from '../../../service/apiService';
import { toast } from 'react-toastify';

const ModalDelete = (props) => {
    const { show, setShow, deleteuser, setdeleteuser } = props;

    const [email, setemail] = useState()

    const handleClose = () => {


        setShow(false);
        setdeleteuser()
    }
    const handleSubmitDelete = async (id) => {
        let data = await Deleteuser(id);
        console.log(">>>>respone", data);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            // await props.fetlistuser();
            props.setcurrenpage(1)

            await props.fetlistuserphantrang(1);

        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);

        }

    }

    useEffect(() => {
        if (!_.isEmpty(deleteuser)) {

            // console.log("useeffect")
            setemail(deleteuser.email)

        }


    }, [deleteuser])


    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete user</Modal.Title>
                </Modal.Header>
                <Modal.Body>bạn có muống xoá người dùng với email: {email}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleSubmitDelete(deleteuser.id) }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;