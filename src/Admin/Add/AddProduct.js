import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import apiServices from "../apiServices"
export default function AddProduct(){
    const [category_name,setCategory_name]=useState()
    // const [categoryId,setCategoryId]=useState()
    const [subcategory_name,setSubcategory_name]=useState()
   
    const [name,setName]=useState()
    const [price,setPrice]=useState()
    const [quantity,setQuantity]=useState()
    const [color,setColor]=useState()
    const [description,setDesc]=useState()
    const [image,setImg]=useState()
   
  
    // const [category , setCategory] = useState([{}])
    // const [categoryId , setCategoryId] = useState([{}])
  
    const [categorydata , setCategoryData] = useState([{}])
    useEffect(
        () => {
            apiServices.getcategory().then(
                (x) => {
                    // console.log(x.data.response.data)
                    setCategoryData(x.data.data)
                    console.log('category is ', categorydata)
                }
            ).catch(
                (error) => {
                    console.log('error is ', error)
                }
            ) 
        }, []
    )
    const [subcategorydata, setSubCategoryData] = useState([{}])
    useEffect(
        () => {
           
            apiServices.getsubcategory().then(
                (x) => {
                    // console.log(x.data.response.data)
                    setSubCategoryData(x.data.data)
                    console.log('category is ', subcategorydata)
                }
            ).catch(
                (error) => {
                    console.log('error is ', error)
                }
            )
        
            
        }, []
    )

    // useEffect(
    //     ()=>{
    //         apiServices.getsinglecategory(category).then(
    //             (x)=>{
    //                 setCategoryId(x.data.data)
    //             }
    //         )
    //         console.log(category)
    //     },[category]
    // )
   
    const changeImg=(e)=>{
        console.log(e)
        setImg(e.target.files[0])
        console.log(image)
        
    }
   
    const save=(e)=>{
        e.preventDefault()
        // console.log(category)
        let data = new FormData()
        // data.append("categoryId",categoryId)
        data.append("category_name",category_name)
        data.append("sub_category_name",subcategory_name)
        data.append("product_name",name)
        data.append("product_quantity",quantity)
        data.append("product_color",color)
        data.append("product_price",price)
        data.append("product_image",image)
        data.append("product_desc",description)
        apiServices.addproduct(data)
        .then(toast.success("Product Added"))
        .catch()
    }
    // const showdata = ()=>{
    //     console.log(category)
    // }
  
    return(
        <>
        <div className="container">
                <div className="contact-form ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact__form__title">
                                    <h2>Add Product</h2>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={save}>
                            <div className="row">
                                <div class="form-group col-lg-6 col-md-6 ">
                                    <select id="inputState" class="form-control  shadow-sm  mb-5 bg-body-tertiary rounded" value={category_name} onChange={(e)=>{setCategory_name(e.target.value)}}>
                                        <option selected disabled>Category...</option>
                                        {categorydata?.map((el, index)=>(
                                            <option key={index} value={el?.category_name}>{el?.category_name}</option>
                                        ))}
                                    </select>
                                    {/* <button onClick={showdata}>show</button> */}
                                </div>
                                {/* <div class="form-group col-lg-6 col-md-6 ">
                                    <select id="inputState" class="form-control  shadow-sm  mb-5 bg-body-tertiary rounded" value={categoryId} onChange={(e)=>{setCategoryId(e.target.value)}}>
                                        <option selected disabled>Category Id...</option>
                                        {categorydata?.map((el, index)=>(
                                            <option value={el?.categoryId}>{el?.categoryId}</option>
                                        ))}
                                    </select>
                                   
                                </div> */}
                                <div class="form-group col-lg-6 col-md-6">
                                    <select id="inputState" class="form-control  shadow-sm  mb-5 bg-body-tertiary rounded"  value={subcategory_name} onChange={(e)=>{setSubcategory_name(e.target.value)}}>
                                        <option selected disabled>Sub Category...</option>
                                       
                                        {subcategorydata?.map((el, index)=>(
                                            <option key={index} value={el?.sub_category_name}>{el?.sub_category_name}</option>
                                        ))}
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
                                <div className="col-lg-6 col-md-6">
                                    <input class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="text" placeholder="Shoe Color" value={color} onChange={(e)=>{setColor(e.target.value)}} />
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