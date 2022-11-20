import { useState, React } from "react";
import "../Auth/login.scss"
import { PostuserSignup } from "../../service/apiService"
import { toast } from 'react-toastify';
import { Outlet, Link, NavLink, useNavigate, Navigate, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Login from "./Login";
import { FaEye, FaEyeDropper, FaEyeSlash } from 'react-icons/fa';


const Signup = (props) => {
    const navigate = useNavigate()

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [username, setusername] = useState("")

    const [ispass, setispass] = useState(true)

    const handleSignup = async () => {

        //valiable
        let data = await PostuserSignup(email, pass, username)


        if (data && data.EC === 0) {
            toast.success(data.EM);

            navigate('/login')







        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);

        }


        console.log("res Signup:", data)

    }


    // useEffect(() => {



    // }, [])
    return (
        <div>
            <section className="h-80 gradient-form" style={{ background: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">

                                                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                            </div>

                                            <form>
                                                <p>Please Signup to your account</p>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example11" className="form-control"
                                                        value={username} placeholder="Phone number or email address"
                                                        onChange={(event) => { setusername(event.target.value) }}
                                                    />
                                                    <label className="form-label" >Username</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example11" className="form-control"
                                                        value={email} placeholder="Phone number or email address"
                                                        onChange={(event) => { setemail(event.target.value) }}
                                                    />
                                                    <label className="form-label" >Email</label>
                                                </div>

                                                <div className="form-outline mb-4 pass-group">
                                                    <input type={ispass ? "password" : "text"} className="form-control" value={pass}

                                                        onChange={(event) => { setpass(event.target.value) }}
                                                    />
                                                    {ispass ?

                                                        <span className="icon-eye" onClick={() => { setispass(false) }} ><FaEyeSlash /></span>
                                                        :
                                                        <span className="icon-eye" onClick={() => setispass(true)}><FaEye /></span>


                                                    }
                                                    <label className="form-label" >Password</label>
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button"
                                                        onClick={() => { handleSignup() }}
                                                    >Signup</button>
                                                    <a className="text-muted" href="#!">Forgot password?</a>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2" style={{ cursor: "pointer" }} onClick={() => { navigate('/') }}>go to home</p>

                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger" onClick={() => navigate('/login')}>Login</button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}
export default Signup;