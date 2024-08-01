import { useState, useEffect } from "react"
import apiServices from "../apiServices"
import { Link } from "react-router-dom";
import { BASE_URL_IMG } from "../apiServices";
export default function ViewProduct() {
    // const products = [
    //     {
    //         product_name: "Adidas",
    //         price: "3500",
    //         image: "product-1.jpg",

    //     },
    //     {
    //         product_name: "Puma",
    //         price: "1500",
    //         image: "product-2.jpg",

    //     },
    //     {
    //         product_name: "Nike",
    //         price: "2500",
    //         image: "product-3.jpg",

    //     },
    //     {
    //         product_name: "Nike",
    //         price: "2599",
    //         image: "product-4.jpg",

    //     }
    // ]
    const [product, setProduct] = useState([{}])
    const [counter, setCounter] = useState(0)
    useEffect(
        () => {
            apiServices.getproduct().then(
                (x) => {
                    // console.log(x.data.response.data)
                    setProduct(x.data.data)
                    console.log('Product is ', setProduct)
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
            {/* <button className="btn btn-primary" onClick={changeLoading}>Refresh</button> */}
            <h2 className="contact__form__title">Manage Product</h2>
                <table className="table border  table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Product name</th>
                            <th>Category name</th>
                            <th>Sub Category name</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Images</th>
                            <th>Description</th>
                            <th>Edit</th>

                             
                        </tr>
                    </thead>
                    {product?.map((el, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{el?.product_name}</td>
                            <td>{el?.category_name}</td>
                            <td>{el?.sub_category_name}</td>
                            <td>{el?.product_price}</td>
                            <td>{el?.product_color}</td>
                            {/* <td>{el?.product_image}</td> */}
                            <td>
                                <img src={BASE_URL_IMG + `${el?.product_image}`}
                                    style={{ height: "100px" }} />
                            </td>
                            <td>{el?.product_desc}</td>
                            {/* <td>
                                <img src={"/assets/img/product/" + `${el.image}`}
                                    style={{ height: "100px" }} />
                            </td> */}
                            <td><Link to={"updateProduct/" + `${el._id}` }><button className="btn btn-outline-success">Edit</button></Link></td>
                            {/* <td><button className="btn btn-outline-danger">Delete</button></td> */}
                        </tr>
                    ))}
                </table>
            </div>
        </>)
}