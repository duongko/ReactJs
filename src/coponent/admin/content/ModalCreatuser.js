import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './MansUser.scss';
import {
    FcPlus
} from 'react-icons/fc'
import axios from "axios"
import { toast } from 'react-toastify';

const ModalCreatuser = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setemail('')
        setpass('')
        setusername('')
        setrole('User')
        setpreviewimg('')


    };
    const handleShow = () => setShow(true);
    //lấy các trường của form
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('')
    const [username, setusername] = useState('')
    const [role, setrole] = useState('User')
    const [img, setimg] = useState()
    const [previewimg, setpreviewimg] = useState()
    const handleimg = (event) => {

        setpreviewimg(URL.createObjectURL(event.target.files[0]));
        setimg(event.target.files[0]);
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handlesubmit = async () => {
        const ivaliemail = validateEmail(email)

        if (!ivaliemail) {
            toast.error('Invalid email');
            return;
        }

        //cal API
        const data = new FormData();//vì cần lấy file ảnh nên phải dùng FormData

        data.append('email', email);
        data.append('password', pass);
        data.append('username', username);
        data.append('role', role);
        data.append('userImage', img);

        let res = await axios.post('http://localhost:8081/api/v1/participant', res.data);
        console.log(">>>>", res);
        if (res.data && rex.data.EC === 0) {
            toast.success(res.data.EM);
            handleClose();
        }
        if (res.data && rex.data.EC != 0) {
            toast.success(res.data.EM);

        }


    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <FcPlus /> Add New User
            </Button>

            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className='modal-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(event) => {
                            setemail(event.target.value)
                        }} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={pass} onChange={(event) => { setpass(event.target.value) }} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">UserName</label>
                        <input type="text" className="form-control" value={username} onChange={(event) => { setusername(event.target.value) }} />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Role</label>
                        <select id="inputState" className="form-select" onChange={(event) => { setrole(event.target.value) }}>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>

                        </select>
                    </div>
                    <div className='col-md-12'>
                        <label className="form-label upload" htmlFor='uploadfile'>
                            <FcPlus size="1.2em"
                            />Upload File Image
                        </label>
                        <input
                            type="file"
                            id="uploadfile" hidden
                            onChange={(event) => { handleimg(event) }}
                        />


                    </div>
                    <div className='col-md-12 img-preview'>
                        {previewimg ?
                            <img src={previewimg}></img>
                            :
                            <span>preview images</span>

                        }




                    </div>
                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlesubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreatuser;
