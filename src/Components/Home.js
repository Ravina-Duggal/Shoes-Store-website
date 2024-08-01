import { useState, useEffect } from "react"
// import { ToastContainer, toast } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
import Localapis from "../Apis/Localapis"
import { LOCAL_URL_IMG } from "../Apis/Localapis"
import { Link } from "react-router-dom"
export default function Home() {
    const [category, setCategory] = useState([{}])

    const [product, setProduct] = useState([{}])
    useEffect(
        () => {
            Localapis.getproduct().then(
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
        }, []
    )
    // const products = [
    //     {
    //         product_name: "Adidas",
    //         price: "3500",
    //         image: "product-1.jpg",
    //         rating:"4.6"


    //     },
    //     {
    //         product_name: "Puma",
    //         price: "1500",
    //         image: "product-2.jpg",
    //         rating:"4.6"


    //     },
    //     {
    //         product_name: "Nike",
    //         price: "2500",
    //         image: "product-3.jpg",
    //         rating:"4.6"


    //     },
    //     {
    //         product_name: "Nike",
    //         price: "2599",
    //         image: "product-4.jpg",
    //         rating:"4.6"


    //     },
    //     {
    //         product_name: "Nike",
    //         price: "2599",
    //         image: "product-4.jpg",
    //         rating:"4.6"


    //     },
    //     {
    //         product_name: "Adidas",
    //         price: "3500",
    //         image: "product-1.jpg",
    //         rating:"4.6"


    //     },
    //     {
    //         product_name: "Puma",
    //         price: "1500",
    //         image: "product-2.jpg",
    //         rating:"4.6"


    //     },
    //     {
    //         product_name: "Nike",
    //         price: "2500",
    //         image: "product-3.jpg",
    //         rating:"4.6"


    //     },
    //     {
    //         product_name: "Adidas",
    //         price: "3500",
    //         image: "product-1.jpg",
    //         rating:"4.6"


    //     },
    //     {
    //         product_name: "Puma",
    //         price: "1500",
    //         image: "product-2.jpg",
    //         rating:"4.6"


    //     },
    //     {
    //         product_name: "Nike",
    //         price: "2500",
    //         image: "product-3.jpg",
    //         rating:"4.6"


    //     },
    //     {
    //         product_name: "Nike",
    //         price: "2599",
    //         image: "product-4.jpg",
    //         rating:"4.6"
    //     },

    // ]
    return (
        <>
            {/* <!-- Hero Section Begin --> */}
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="dropdown">
                                <button className="col-md-12 mb-2 btn site-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Categories
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link to='/menProducts'><a className="dropdown-item " href="#">Men</a></Link></li>
                                    <li> <Link to='/womenProducts'><a className="dropdown-item" href="#">Women</a></Link></li>
                                    <li><Link to='/kidsProducts'><a className="dropdown-item" href="#">Kids</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 ">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+91 9878947313</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__item set-bg" style={{ backgroundImage: "url('/assets/img/hero/banner.png')" }} >
                                <div className="hero__text">
                                    <span>Shoes</span>
                                    <h2>Best Material  <br />Shoe</h2>
                                    <p>Free Pickup and Delivery Available</p>
                                    <Link to='/shop'><a href="#" className="primary-btn">SHOP NOW</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Hero Section End -->

          <!-- Featured Section Begin --> */}
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Recent Product</h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    <Link to='allProducts'><li className="active p-2" data-filter="*">All</li></Link>
                                    <Link to='menProducts'><li className="p-2" data-filter=".Men">Men</li></Link>
                                    <Link to='womenProducts'><li className="p-2" data-filter=".Women">Women</li></Link>
                                    <Link to='kidsProducts'><li className="p-2" data-filter=".Kids">Kids</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                          {product?.map((el) => (
                                    <div className="col-md-3">
                                        <Link to='userSingleProduct'>
                                            <div className="card product-pop mb-4">
                                                <img src={LOCAL_URL_IMG + `${el?.product_image}`} className="card-img-top" alt="product image" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{el?.product_name}</h5>
                                                    {/* <span className="product-like"><i class="fa fa-heart-o px-2"></i></span> */}
                                                    <p className="card-text">&#8377; {el?.product_price}</p>
                                                    {/* <span className="product-rating"><i class="fa fa-star px-2"></i>{el.rating}</span> */}
                                                    {/* <a href="#" className="btn  btn-secondary site-btn">Buy</a> */}
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                ))}
                        {/* {products.map((el) => (
                                    <div className="col-md-3">
                                        <Link to='/singleProduct'>
                                        <div className="card product-pop mb-3">
                                            <img src={"/assets/img/product/" + `${el.image}`} className="card-img-top" alt="product image" />
                                            <div className="card-body">
                                                <h5 className="card-title">{el.product_name}<span className="product-like"><i class="fa fa-heart-o px-2"></i></span></h5>
                                                <p className="card-text">&#8377; {el.price}<span className="product-rating"><i class="fa fa-star px-2"></i>{el.rating}</span></p>
                                              
                                            </div>
                                        </div>
                                        </Link>

                                    </div>
                                ))} */}

                    </div>
                </div>
            </section>
            {/* <!-- Featured Section End -->*/}

        </>
    )
}