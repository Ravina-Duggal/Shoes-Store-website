import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import apiServices from "../apiServices"
export default function UpdateProduct(){
    const navigate =useNavigate()
    const [category_name,setCategory_name]=useState()
    const [sub_category_name,setSubcategory_name]=useState()
    const [product_name,setProduct_name] = useState()
    const [product_image,setProductImage] = useState()
    const [product_price,setProductPrice]=useState()
    const [product_quantity,setProductQuantity]=useState()
    const [product_desc,setProductDesc]=useState()
    const param = useParams()
    const _id = param.id

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

    useEffect(() => {
       apiServices.getsingleproduct(_id).then(
           (e) => {
               console.log(e.data.data)
               setCategory_name(e.data.data.category_name)
               setSubcategory_name(e.data.data.sub_category_name)
               setProduct_name(e.data.data.product_name)
               setProductPrice(e.data.data.product_price)
               setProductQuantity(e.data.data.product_quantity)
               setProductDesc(e.data.data.product_desc)
               setProductImage(e.data.data.product_image)
           }
       ).catch()
    }, [])

    const handleForm = (e) =>{
        e.preventDefault()

        let data = new FormData()
        data.append("category_name",category_name)
        data.append("sub_category_name",sub_category_name)
        data.append('product_name',product_name)
        data.append('product_image', product_image)
        data.append('product_price', product_price)
        data.append('product_quantity', product_quantity)
        data.append('product_desc', product_desc)
        data.append("_id",_id)
        apiServices.updateproduct(data).then(
           (x) => {
           if (x.data.success){
               toast.success("Product Added")
               navigate('/admindashboard/viewproduct')
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
 
    return(
        <>
        <div className="container">
                <div className="contact-form ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact__form__title">
                                    <h2>Update Product</h2>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleForm}>
                            <div className="row">
                                <div class="form-group col-lg-6 col-md-6 ">
                                    <select id="inputState" class="form-control  shadow-sm  mb-5 bg-body-tertiary rounded" value={category_name} onChange={(e) => { setCategory_name(e.target.value) }}>
                                        <option selected disabled>Category...</option>
                                        {categorydata?.map((el, index)=>(
                                            <option  key={index}>{el?.category_name}</option>
                                        ))}
                                        {/* <option>Men</option>
                                        <option>Women</option>
                                        <option>Kids</option> */}
                                    </select>
                                </div>
                                <div class="form-group col-lg-6 col-md-6">
                                    <select id="inputState" class="form-control  shadow-sm  mb-5 bg-body-tertiary rounded" value={sub_category_name} onChange={(e) => { setSubcategory_name(e.target.value) }}>
                                        <option selected disabled>Sub Category...</option>
                                        {subcategorydata?.map((el, index)=>(
                                            <option  key={index} >{el?.sub_category_name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 ">
                                    <input  class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="text" placeholder="Product Name" value={product_name} onChange={(e)=>{setProduct_name(e.target.value)}}/>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 ">
                                    <input  class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="number" placeholder="Price" value={product_price} onChange={(e)=>{setProductPrice(e.target.value)}} />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="number" placeholder="Quantity" value={product_quantity} onChange={(e)=>{setProductQuantity(e.target.value)}} />
                                </div>
                                <div className="col-lg-6 col-md-6 ">
                                    <input class="form-control shadow-sm pb-3 mb-5 bg-body-tertiary rounded" type="file" onChange={(e)=> { setProductImage(e.target.files[0])}}/>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <textarea class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" placeholder="Description" value={product_desc} onChange={(e)=>{setProductDesc(e.target.value)}}></textarea>
                                    <button type="submit" className="site-btn">Update Product</button>
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