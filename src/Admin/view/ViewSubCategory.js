import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import apiServices from "../apiServices"
import { BASE_URL_IMG } from "../apiServices"
export default function ViewSubCategory() {
    const [subcategory, setSubCategory] = useState([{}])
    const [counter, setCounter] = useState(0)
    useEffect(
        () => {
            apiServices.getsubcategory().then(
                (x) => {
                    // console.log(x.data.response.data)
                    setSubCategory(x.data.data)
                    console.log('category is ', subcategory)
                }
            ).catch(
                (error) => {
                    console.log('error is ', error)
                }
            )
        }, [counter]
    )
    const changeLoading = () => {
        setCounter(counter + 1)
        console.log('counter is ', counter)
    }
    return (
        <>
            <div className="container table-responsive mt-3 ">
            <button className="btn btn-primary" onClick={changeLoading}>Refresh</button>
                <h2 className="contact__form__title">Manage Sub Category</h2>
                <table className="table border table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Sub Cat Name</th>
                            <th>Category Name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    {subcategory.map((el, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{el?.sub_category_name}</td>
                            <td>{el?.category_name}</td>
                            <td>{el?.sub_category_desc}</td>
                            {/* <td>{el?.sub_category_image}</td> */}
                            <td>
                                <img src={BASE_URL_IMG+`${el?.sub_category_image}`}  style={{height:"100px"}}/>
                                </td>

                            <td><Link to={"updateSubCategory/" + `${el._id}` }><button className="btn btn-outline-success">Edit</button></Link></td>
                            <td><button className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}
