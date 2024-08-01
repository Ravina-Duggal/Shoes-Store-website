import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import apiServices from "../apiServices"

export default function MainCategory() {
    const navigate=useNavigate()
    const [name,setName]=useState()
    const [image,setImg]=useState()
  
    const changeImg=(e)=>{
        console.log(e)
        setImg(e.target.files[0])
        console.log(image)
        
    }
    const save=(e)=>{
        e.preventDefault()
        let data = new FormData()
        data.append("category_name",name)
        data.append("category_image",image)
        apiServices.addcategory(data).then((x)=>{
            
            if(x.data.data.success){
                toast.success("Category Added")
                setTimeout(() => {
                    navigate("/admindashboard/viewCategory")
                }, 1000);
                
            }else{
                toast.error("Category already Added")

            }
        }
        
    
        ).catch()
    }
  
    return (
        <>
            <div className="container">
                 <div className="contact-form spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact__form__title">
                                <h2>Add Category</h2>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={save}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <input class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="text" placeholder="Category" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                            </div>
                            <div className="col-lg-12 col-md-12 ">
                                    <input class="form-control shadow-sm pb-3 mb-5 bg-body-tertiary rounded" type="file" onChange={changeImg} />
                                </div>
                            <div className="col-lg-12 text-center">
                                {/* <textarea class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" placeholder="Your message"></textarea> */}
                                <button type="submit" className="site-btn">Add</button>
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