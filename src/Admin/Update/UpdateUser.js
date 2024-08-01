import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import apiServices from "../apiServices"
export default function UpdateUser(){
    const [name,setName]=useState()
    const [price,setPrice]=useState()
    const [quantity,setQuantity]=useState()
    const [description,setDesc]=useState()
    const [image,setImg]=useState()
  
    const changeImg=(e)=>{
        console.log(e)
        setImg(e.target.files[0])
        console.log(image)
        
    }
    const save=(e)=>{
        e.preventDefault()
        let data = new FormData()
        data.append("product_name",name)
        data.append("product_quantity",quantity)
        data.append("product_price",price)
        data.append("product_image",image)
        data.append("product_desc",description)
        apiServices.addproduct(data).then(toast.success("Product Added")).catch()
    }
  
    return(
        <>
        <div className="container">
                <div className="contact-form ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact__form__title">
                                    <h2>Update User</h2>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={save}>
                            <div className="row">
                                <div class="form-group col-lg-6 col-md-6 ">
                                    <select id="inputState" class="form-control  shadow-sm  mb-5 bg-body-tertiary rounded">
                                        <option selected disabled>Category...</option>
                                        <option>Men</option>
                                        <option>Women</option>
                                        <option>Kids</option>
                                    </select>
                                </div>
                                <div class="form-group col-lg-6 col-md-6">
                                    <select id="inputState" class="form-control  shadow-sm  mb-5 bg-body-tertiary rounded">
                                        <option selected disabled>Sub Category...</option>
                                        <option>Formal</option>
                                        <option>Casual</option>
                                        <option>Sports</option>
                                        <option>Sneakers</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 ">
                                    <input  class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="text" placeholder="Product Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 ">
                                    <input  class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="number" placeholder="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="number" placeholder="Quantity" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} />
                                </div>
                                <div className="col-lg-6 col-md-6 ">
                                    <input class="form-control shadow-sm pb-3 mb-5 bg-body-tertiary rounded" type="file" onChange={changeImg} />
                                </div>
                                <div className="col-lg-12 text-center">
                                    <textarea class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" placeholder="Description" value={description} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                                    <button type="submit" className="site-btn">Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}