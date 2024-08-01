import { useState, useEffect } from "react"
// import { ToastContainer, toast } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
import apiServices from "../apiServices"
import { BASE_URL_IMG } from "../apiServices"
import { Link } from "react-router-dom"
export default function ViewCategory() {
    const [category, setCategory] = useState([{}])
    const [counter, setCounter] = useState(0)
    useEffect(
        () => {
            apiServices.getcategory().then(
                (x) => {
                    // console.log(x.data.response.data)
                    setCategory(x.data.data)
                    console.log('category is ', category)
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
            <div className="container table-responsive mt-5 ">
                <button className="btn btn-primary" onClick={changeLoading}>Refresh</button>
                <h2 className="contact__form__title">Manage Category</h2>
                <table className="table border table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Category Name</th>
                            {/* <th>Description</th> */}
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    {category?.map((el, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{el?.category_name}</td>
                            {/* <td>{el.description}</td> */}
                            {/* <td>{el?.category_image}</td> */}
                            <td>
                                <img src={BASE_URL_IMG + `${el?.category_image}`}
                                    style={{ height: "100px" }} alt="category"/>
                            </td>
                            <td><Link to={"updateCategory/" + `${el._id}`} ><button className="btn btn-outline-success">Edit</button></Link></td>
                            <td><button className="btn btn-outline-danger">Delete</button></td>

                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}
