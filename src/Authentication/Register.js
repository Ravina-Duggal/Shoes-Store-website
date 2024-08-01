import { useState } from "react"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import apiServices from "../Admin/apiServices"
export default function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [password, setPassword] = useState()
    const [contact, setContact] = useState()

    const handleForm = (e) => {
        e.preventDefault()
        let data = {
            email: email,
            password: password,
            address: address,
            contact: contact,
            name: name,
        }
        apiServices.register(data).then((x) => {
            console.log(x.data.success)
            if(x.data.success){
                toast.success("User register")

            }
            else{
                toast.error("User already register")

            }
        }).catch(
            (error) => {
                console.log(error)
                toast.error("Something went wrong!! Try again later.")
            }
        )
    }

    return (
        <>
            <div className="container mb-5 mt-5 d-flex justify-content-center">
                <div className="row col-5 shadow-lg p-3 mb-5 bg-body rounded">
                    <form onSubmit={handleForm}>
                        <h3 className="mb-4 fw-normal">Sign Up</h3>
                        {/* <!-- Email input --> */}
                        <div class="form-outline mb-4">
                            <input type="text" id="form2Example0" class="form-control" required value={name} onChange={(e) => setName(e.target.value)} />
                            <label class="form-label" for="form2Example1">Your Name</label>
                        </div>
                        <div class="form-outline mb-4">
                            <input type="email" id="form2Example1" class="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label class="form-label" for="form2Example1">Email address</label>
                        </div>

                        {/* <!-- Password input --> */}
                        <div class="form-outline mb-4">
                            <input type="password" id="form2Example2" class="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label class="form-label" for="form2Example2">Password</label>
                        </div>
                        <div class="form-outline mb-4">
                            <input type="text" id="form2Example2" class="form-control" required value={address} onChange={(e) => setAddress(e.target.value)} />
                            <label class="form-label" for="form2Example2">Address</label>
                        </div>
                        <div class="form-outline mb-4">
                            <input type="number" id="form2Example2" class="form-control" required value={contact} onChange={(e) => setContact(e.target.value)} />
                            <label class="form-label" for="form2Example2">Contact</label>
                        </div>

                        {/* <!-- 2 column grid layout for inline styling --> */}


                        {/* <!-- Submit button --> */}
                        <button type="submit" class="btn site-btn btn-block mb-4">Register</button>

                    </form>
                    {/* <!-- Register buttons --> */}
                    <div class="text-center ">
                        <p>Already member? <Link to='/login'><a href="#!" className="red-color">Login</a></Link></p>
                    </div>
                </div>

            </div>
            <ToastContainer/>
        </>

    )
}