import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import apiServices from "../apiServices"
export default function UpdateSubCategory() {
    const navigate = useNavigate()
    const [category_name,setCategory_name]=useState()
    const [sub_category_name, setSubCategoryName] = useState()
    const [sub_category_image, setSubCategoryImage] = useState()
    // const [product_price,setProductPrice]=useState()
    // const [product_quantity,setProductQuantity]=useState()
    const [sub_category_desc, setSubCategoryDesc] = useState()
    const param = useParams()
    const _id = param.id

    const [categorydata, setCategoryData] = useState([{}])
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
    useEffect(() => {

        apiServices.singlesubcategory(_id).then(
            (e) => {
                console.log(e.data.data)
                setCategory_name(e.data.data.category_name)
                setSubCategoryName(e.data.data.sub_category_name)
                //    setProductPrice(e.data.data.product_price)
                //    setProductQuantity(e.data.data.product_quantity)
                setSubCategoryDesc(e.data.data.sub_category_desc)
                setSubCategoryImage(e.data.data.sub_category_image)
            }
        ).catch()
    }, [])

    const handleForm = (e) => {
        e.preventDefault()

        let data = new FormData()
        data.append('sub_category_name', sub_category_name)
        data.append('sub_category_image', sub_category_image)
        data.append('sub_category_desc', sub_category_desc)
        // data.append('product_quantity', product_quantity)
        data.append("_id", _id)
        apiServices.updatesubcategory(data).then(
            (x) => {
                if (x.data.success) {
                    toast.success("Sub category Added")
                    navigate('/admindashboard/viewSubCategory')
                } else {
                    toast.error(x.data.msg)
                }
            }).catch(
                (error) => {
                    console.log(error)
                    toast.error("somethiong went wrong")
                }
            )
    }
    // const [name,setName]=useState()
    // const [price,setPrice]=useState()
    // const [description,setDesc]=useState()
    // const [image,setImg]=useState()

    // const changeImg=(e)=>{
    //     console.log(e)
    //     setImg(e.target.files[0])
    //     console.log(image)

    // }
    // const save=(e)=>{
    //     e.preventDefault()
    //     let data = new FormData()
    //     data.append("sub_category_name",name)
    //     data.append("sub_category_image",image)
    //     data.append("sub_category_desc",description)
    //     apiServices.addsubcategory(data).then(toast.success("Sub Category Updated")).catch()
    // }

    return (
        <>
            <div className="container">
                <div className="contact-form spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact__form__title">
                                    <h2>Update Sub Category</h2>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleForm}>
                            <div className="row">

                                <div class="form-group  col-lg-6 col-md-6 ">
                                    <select id="inputState" class="form-control  shadow-sm  mb-5 bg-body-tertiary rounded" value={category_name} onChange={(e) => { setCategory_name(e.target.value) }}>
                                        <option selected disabled>Category...</option>
                                        {categorydata?.map((el, index) => (
                                            <option key={index}>{el?.category_name}</option>
                                        ))}
                                        {/* <option>Men</option>
                                        <option>Women</option>
                                        <option>Kids</option> */}
                                    </select>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="text" placeholder="Sub Category" value={sub_category_name} onChange={(e) => { setSubCategoryName(e.target.value) }} />
                                </div>
                                {/* <div className="col-lg-6 col-md-6">
                                    <input class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="number" placeholder="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                                </div> */}

                                <div className="col-lg-6 col-md-6 ">
                                    <input class="form-control shadow-sm pb-3 mb-5 bg-body-tertiary rounded" type="file" onChange={(e) => { setSubCategoryImage(e.target.files[0]) }} />
                                </div>
                                <div className="col-lg-12 text-center">
                                    <textarea class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" placeholder="Description" value={sub_category_desc} onChange={(e) => { setSubCategoryDesc(e.target.value) }}></textarea>
                                    <button type="submit" className="site-btn">Update Sub Category</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}