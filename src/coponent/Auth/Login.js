import { useState } from "react";
import "../Auth/login.scss"
import { Postuserlogin } from "../../service/apiService"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { FaAddressBook, FaAddressCard, FaAdversal, FaBabyCarriage, FaTachometerAlt, FaReact, FaEye, FaEyeDropper, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import ImSpinner10, { ImAccessibility, ImSpinner11 } from "react-icons/im"
const Login = (props) => {
    const navigate = useNavigate()


    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [ispass, setispass] = useState(true)

    const [loading, setloading] = useState(false)

    const dispatch = useDispatch()

    const handlelogin = async () => {

        setloading(true)
        //valiable
        let data = await Postuserlogin(email, pass)

        if (data && data.EC === 0) {
            toast.success(data.EM);
            ///kêt nối với redux qua dispatch(action)
            dispatch(doLogin(data))
            setloading(false)
            navigate('/')
            //navigate dùng để chuyển trang

        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);

        }


        console.log("res login:", data)

    }

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
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    style={{ width: '155px' }} />
                                                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                            </div>

                                            <form>
                                                <p>Please login to your account</p>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example11" className="form-control"
                                                        value={email} placeholder="Phone number or email address"
                                                        onChange={(event) => { setemail(event.target.value) }}
                                                    />
                                                    <label className="form-label" >Username</label>
                                                </div>

                                                <div className="form-outline mb-4 pass-group">
                                                    <input type={ispass ? "password" : "text"} className="form-control" value={pass}

                                                        onChange={(event) => { setpass(event.target.value) }}


                                                    />{ispass ?

                                                        <span className="icon-eye" onClick={() => { setispass(false) }} ><FaEyeSlash /></span>
                                                        :
                                                        <span className="icon-eye" onClick={() => setispass(true)}><FaEye /></span>


                                                    }

                                                    <label className="form-label" >Password</label>
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button"
                                                        onClick={() => { handlelogin() }} disabled={loading}
                                                    >{loading == true && <ImSpinner11 className="load-icon" />} Log
                                                        in vào trang</button>
                                                    <a className="text-muted" href="#!">Forgot password?</a>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2" style={{ cursor: "pointer" }} onClick={() => { navigate('/') }}>go to home</p>

                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger" onClick={() => navigate('/signup')}>Create new</button>
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
                </div >
            </section >

        </div >
    )
}
export default Login;