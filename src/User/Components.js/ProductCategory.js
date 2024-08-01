import { useState, useEffect } from "react"
import { USER_URL_IMG } from "../userApiServices"

import { Link } from "react-router-dom";
import userApiServices from "../userApiServices";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export default function ProductCategory() {
    const navigate=useNavigate()
    const [category, setCategory] = useState([{}])
    // const [counter, setCounter] = useState(0)
    useEffect(
        () => {
            userApiServices.usergetcategory().then(
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
        }, []
    )
   
    const open = () => {
        // useEffect(
        //     () => {
        //         Localapis.getproduct().then(
        //             (x) => {
        //                 // console.log(x.data.response.data)
        //                 // setProduct(x.data.data)
        //                 if (x.data.data.category_name == "men") {
        //                     toast.success("Men Category")
        //                     setTimeout(() => {
        //                         navigate("/menProducts")
        //                     }, 1000);
        //                 }
        //                 else if (x.data.data.category_name == "women") {
        //                     toast.success("Women Category")
        //                     setTimeout(() => {
        //                         navigate("/womenProducts")
        //                     }, 1000);
        //                 }
        //                 else {
        //                     toast.success("User Login Successfully")
        //                     setTimeout(() => {
        //                         navigate("/kidsProducts")
        //                     }, 1000);
        //                 }

        //             }
        //         ).catch(
        //             (error) => {
        //                 console.log('error is ', error)
        //             }
        //         )
        //     }, []
        // )
        }
    // const changeLoading = () => {
    //     setCounter(counter + 1)
    //     console.log('counter is ', counter)
    // }

    return (
        <>
            {/* <!-- Hero Section Begin --> */}
            <section class="hero hero-normal">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div className="dropdown">
                                <button className="col-md-12 mb-2 btn site-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Categories
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link to='/menProducts'><a className="dropdown-item" href="#">Men</a></Link></li>
                                    <li> <Link to='/womenProducts'><a className="dropdown-item" href="#">Women</a></Link></li>
                                    <li><Link to='/kidsProducts'><a className="dropdown-item" href="#">Kids</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="hero__search">
                                <div class="hero__search__form">
                                    <form action="#">
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" class="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div class="hero__search__phone">
                                    <div class="hero__search__phone__icon">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div class="hero__search__phone__text">
                                        <h5>+91 9878947313</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Hero Section End -->

         <!-- Breadcrumb Section Begin --> */}
            <section class="breadcrumb-section set-bg" style={{ backgroundImage: "url('/assets/img/shoe.jpg')" }} >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="breadcrumb__text">
                                <h2>Shoe Shop</h2>
                                <div class="breadcrumb__option">
                                    <Link to='/'>
                                        Home
                                    </Link>
                                    <Link to='/shop'>
                                        Shop
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-5 mt-5">
                <div className="row">
                    {category?.map((el) => (
                        <div className="col-md-4">
                            <div className="card product-pop shadow mb-4 " onClick={open}>
                                <img src={USER_URL_IMG + `${el?.category_image}`} className="card-img-top" alt="category image" />
                                <div className="card-body">
                                    <h5 className="card-title">{el?.category_name}</h5>
                                    {/* <span className="product-like"><i class="fa fa-heart-o px-2"></i></span> */}
                                    {/* <p className="card-text">&#8377; {el?.product_price}</p> */}
                                    {/* <span className="product-rating"><i class="fa fa-star px-2"></i>{el.rating}</span> */}
                                    {/* <a href="#" className="btn  btn-secondary site-btn">Buy</a> */}

                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="col-4 mt-3">
                        <div class="card admin-card shadow p-5">
                            <Link to='/menCat'> <div class="card-body">
                                <h3 class="card-title text-light">Men </h3>
                            </div></Link>
                        </div>
                    </div>
                    <div className="col-4 mt-3">
                        <div class="card admin-card shadow  p-5" >
                            <Link to='/womenCat'>  <div class="card-body">
                                <h3 class="card-title text-light">Women </h3>
                            </div></Link>
                        </div>
                    </div>
                    <div className="col-4 mt-3">
                        <div class="card admin-card shadow mb-5  p-5" >
                            <Link to='/kidsCat'> <div class="card-body">
                                <h3 class="card-title text-light">Kids </h3>
                            </div></Link>
                        </div>
                    </div> */}
                </div>
            </div>
<ToastContainer/>
        </>
    )
}