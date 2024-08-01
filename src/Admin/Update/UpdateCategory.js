import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import apiServices from "../apiServices"

export default function UpdateCategory() {
     const navigate =useNavigate()
     const [category_name,setCategory_name] = useState()
     const [image,setImage] = useState()
     const param = useParams()
     const _id = param.id

     useEffect(() => {
        apiServices.getsinglecategory(_id).then(
            (e) => {
                console.log(e.data.data)
                setCategory_name(e.data.data.category_name)
                setImage(e.data.data.category_image)
            }
        ).catch()
     }, [])

     const handleForm = (e) =>{
         e.preventDefault()

         let data = new FormData()
         data.append('category_name',category_name)
         data.append('category_image', image)
         data.append("_id",_id)
         apiServices.updatecategory(data).then(
            (x) => {
            if (x.data.success){
                toast.success("Product Added")
                navigate('/admindashboard/viewCategory')
            }else{
                toast.error(x.data.msg)
            }
         }).catch(
            (error) =>{
                console.log(error)
                toast.error("somethiong went wrong")
            }
         )
     }
    return (
        <>
            <div className="container">
                 <div className="contact-form spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact__form__title">
                                <h2>Update Category</h2>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleForm}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <input class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="text" placeholder="Category" required value={category_name} onChange={(e)=> {setCategory_name(e.target.value)}}/>
                            </div>
                            <div className="col-lg-12 col-md-12 ">
                                    <input class="form-control shadow-sm pb-3 mb-5 bg-body-tertiary rounded" type="file" required onChange={(e)=> { setImage(e.target.files[0])}}/>
                                </div>
                            <div className="col-lg-12 text-center">
                                {/* <textarea class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" placeholder="Your message"></textarea> */}
                                <button type="submit" className="site-btn">Update Category</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
            </div>
        </>
    )
}