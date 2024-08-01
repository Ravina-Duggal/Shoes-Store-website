// import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import apiServices from "../Admin/apiServices"
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// import apiServices from "../Admin/apiServices"

export default function Login() {
    const [loading, setLoading]=useState(false)
    const navigate=useNavigate()
    const [email,setEmail]=useState("abc@gmail.com")
    const [password,setPassword]=useState()
    const handleForm=(e)=>{
        e.preventDefault()
        setLoading(true)
        let data={
             email:email,
             password:password, 
        }
        apiServices.login(data).then(
            (x)=>{
                setTimeout(
                    ()=>{
                        setLoading(false)
                    },1500
                )
                if(x.data.data.status){
                    // console.log(x)
                    sessionStorage.setItem("token",x.data.data.token)
                    sessionStorage.setItem("authorize", true)
                    if (x.data.data.userType == 1) {
                        toast.success("Admin Login")
                        setTimeout(() => {
                            navigate("/admindashboard")
                        }, 1000);
                        
                    }
                    else {
                        toast.success("User Login Successfully")
                        setTimeout(() => {
                            navigate("/user")
                        }, 1000);
                    }
                }
                else{
                    toast.error("email and Password wrong")
                }
            }
        ).catch(
            (error)=>{
                setTimeout(
                    ()=>{
                        setLoading(false)
                    },1500
                )
                console.log(error)
                toast.error("Something went wrong!! try again later")
            }
        )
    }
    const cssobj={
        position:"absolute",
        top:"20%",
        left:"45%",
    }
    return (
        <>
        <div className={loading?"disabled_screen":""}>
        <ClipLoader loading={loading} cssOverride={cssobj}/>
            <div className="container mb-5 mt-5  ">
                <div className="row col-5 shadow-lg p-3 mb-5 bg-body rounded">
                    <form onSubmit={handleForm}>
                        <h3 className="mb-4 fw-normal">Login</h3>
                        {/* <!-- Email input --> */}
                        <div class="form-outline mb-4">
                            <input type="email" id="form2Example1" class="form-control" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <label class="form-label" for="form2Example1" >Email address</label>
                        </div>

                        {/* <!-- Password input --> */}
                        <div class="form-outline mb-4">
                            <input type="password" id="form2Example2" class="form-control" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <label class="form-label" for="form2Example2">Password</label>
                        </div>

                        {/* <!-- 2 column grid layout for inline styling --> */}
                        {/* <div class="row mb-4">
                            <div class="col d-flex justify-content-center"> */}
                        {/* <!-- Checkbox --> */}
                        {/* <div class="form-check">
                                    <input class="form-check-input red-color" type="checkbox" value="" id="form2Example31" />
                                    <label  for="form2Example31"> Remember me </label>
                                </div>
                            </div>

                            <div class="col"> */}
                        {/* <!-- Simple link --> */}
                        {/* <a>Forgot password?</a>
                            </div>
                        </div> */}

                     
                        <button type="submit" class="btn site-btn btn-block mb-4">Login</button>

                        {/* <!-- Register buttons --> */}
                        <div class="text-center ">
                            <p>Not a member? <Link to='/register'><a className="red-color">Register</a></Link></p>
                         
                        </div>
                    </form>
                </div>

            </div>
            <ToastContainer />
            </div>
        </>
    )
}