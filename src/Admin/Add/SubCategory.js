import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import apiServices from "../apiServices"
export default function SubCategory() {
    const [category_name,setCategory_name]=useState()
    const [name, setName] = useState()
    // const [price,setPrice]=useState()
    const [description, setDesc] = useState()
    const [image, setImg] = useState()

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

    const changeImg = (e) => {
        console.log(e)
        setImg(e.target.files[0])
        console.log(image)

    }
    const save = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("category_name", category_name)
        data.append("sub_category_name", name)
        data.append("sub_category_image", image)
        data.append("sub_category_desc", description)
        apiServices.addsubcategory(data).then(toast.success("Sub Category Added")).catch()
    }

    return (
        <>
            <div className="container">
                <div className="contact-form spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact__form__title">
                                    <h2>Sub Category</h2>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={save}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <input class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="text" placeholder="Sub Category" value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div class="form-group  col-lg-6 col-md-6 ">
                                    <select id="inputState" class="form-control  shadow-sm  mb-5 bg-body-tertiary rounded" value={category_name} onChange={(e) => { setCategory_name(e.target.value) }}>
                                        <option selected disabled>Category...</option>
                                        {categorydata?.map((el, index) => (
                                            <option key={index} value={el?.category_name}>{el?.category_name}</option>
                                        ))}
                                    </select>
                                </div>
                                {/* <div className="col-lg-6 col-md-6">
                                    <input class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="number" placeholder="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                                </div> */}

                                <div className="col-lg-6 col-md-6 ">
                                    <input class="form-control shadow-sm pb-3 mb-5 bg-body-tertiary rounded" type="file" onChange={changeImg} />
                                </div>
                                <div className="col-lg-12 text-center">
                                    <textarea class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" placeholder="Description" value={description} onChange={(e) => { setDesc(e.target.value) }}></textarea>
                                    <button type="submit" className="site-btn">Add</button>
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