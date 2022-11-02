import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './MansUser.scss';
import {
    FcPlus
} from 'react-icons/fc'

import { toast } from 'react-toastify';
import { PutapiService } from '../../../service/apiService';
import _ from 'lodash'


const Modaluserview = (props) => {

    const { show, setShow } = props
    const { userupdate, setuserupdate } = props
    const { viewuser, setviewuser } = props


    const handleClose = () => {
        setShow(false)
        setemail('')
        setpass('')
        setusername('')
        setrole('User')
        setpreviewimg('')
        setviewuser('')



    };

    //lấy các trường của form
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('')
    const [username, setusername] = useState('')
    const [role, setrole] = useState('User')
    const [img, setimg] = useState()
    const [previewimg, setpreviewimg] = useState()


    useEffect(() => {
        if (!_.isEmpty(viewuser)) {

            // console.log("useeffect")
            setemail(viewuser.email)
            setpass(viewuser.pass)
            setusername(viewuser.username)
            setrole(viewuser.role)
            setpreviewimg(`data:image/jpeg;base64,${viewuser.image}`)

        }


    }, [viewuser])
    const handleimg = (event) => {
        //Hàm lấy file ẢNh
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
        // const ivaliemail = validateEmail(email)

        // if (!ivaliemail) {
        //     toast.error('Invalid email');
        //     return;
        // }

        //cal API

        let data = await PutapiService(userupdate.id, email, username, role, img);
        console.log(">>>>respone", data);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetlistuser();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);

        }


    }

    console.log('check data : update')

    return (
        <>


            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className='modal-user'>
                <Modal.Header closeButton>
                    <Modal.Title>VIEW user</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(event) => {
                            setemail(event.target.value)
                        }} disabled />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={pass} disabled onChange={(event) => { setpass(event.target.value) }} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">UserName</label>
                        <input type="text" className="form-control" value={username} disabled
                            onChange={(event) => { setusername(event.target.value) }} />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Role</label>
                        <select id="inputState" className="form-select" disabled
                            onChange={(event) => { setrole(event.target.value) }}>
                            <option value={role}>{role}</option>
                            <option value={role}>{role}</option>

                        </select>
                    </div>
                    <div className='col-md-12'>
                        <label className="form-label upload" htmlFor='uploadfile'>
                            <FcPlus size="1.2em"
                            />Upload File Image
                        </label>
                        <input
                            disabled
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

                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Modaluserview;
