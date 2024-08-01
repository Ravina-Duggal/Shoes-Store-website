
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import userApiServices from "../userApiServices"
import { USER_URL_IMG } from "../userApiServices"

export default function UserShop() {
    const [product, setProduct] = useState([{}])
    const [counter, setCounter] = useState(0)
    useEffect(
        () => {
            userApiServices.usergetproduct().then(
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
                                    <li><a className="dropdown-item" href="#">Men</a></li>
                                    <li><a className="dropdown-item" href="#">Women</a></li>
                                    <li><a className="dropdown-item" href="#">Kids</a></li>
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
            {/* <!-- Breadcrumb Section End -->

            <!-- Product Section Begin --> */}
            <section class="product spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-5">
                            <div class="sidebar">
                                <div class="sidebar__item">
                                    <h4>Categories</h4>
                                    <ul>
                                        <li><a href="#">Men's Footwear</a></li>
                                        <li><a href="#">Womens' Footwear</a></li>
                                        <li><a href="#">Kids Footwear</a></li>
                                        <li><a href="#">Sports Shoes</a></li>
                                        <li><a href="#">Footwear</a></li>
                                    </ul>
                                </div>
                                <div class="sidebar__item">
                                    <h4>Price</h4>
                                    <div class="price-range-wrap">
                                        <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min="10" data-max="540">
                                            <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                                            <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                            <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        </div>
                                        <div class="range-slider">
                                            <div class="price-input">
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sidebar__item sidebar__item__color--option">
                                    <h4>Colors</h4>
                                    <div class="sidebar__item__color sidebar__item__color--white">
                                        <label for="white">
                                            White
                                            <input type="radio" id="white" />
                                        </label>
                                    </div>
                                    <div class="sidebar__item__color sidebar__item__color--gray">
                                        <label for="gray">
                                            Gray
                                            <input type="radio" id="gray" />
                                        </label>
                                    </div>
                                    <div class="sidebar__item__color sidebar__item__color--red">
                                        <label for="red">
                                            Red
                                            <input type="radio" id="red" />
                                        </label>
                                    </div>
                                    <div class="sidebar__item__color sidebar__item__color--black">
                                        <label for="black">
                                            Black
                                            <input type="radio" id="black" />
                                        </label>
                                    </div>
                                    <div class="sidebar__item__color sidebar__item__color--blue">
                                        <label for="blue">
                                            Blue
                                            <input type="radio" id="blue" />
                                        </label>
                                    </div>
                                    <div class="sidebar__item__color sidebar__item__color--green">
                                        <label for="green">
                                            Green
                                            <input type="radio" id="green" />
                                        </label>
                                    </div>
                                </div>
                                <div class="sidebar__item">
                                    <h4>Popular Size</h4>
                                    <div class="sidebar__item__size">
                                        <label for="large">
                                            6
                                            <input type="radio" id="large" />
                                        </label>
                                    </div>
                                    <div class="sidebar__item__size">
                                        <label for="medium">
                                            7
                                            <input type="radio" id="medium" />
                                        </label>
                                    </div>
                                    <div class="sidebar__item__size">
                                        <label for="small">
                                            8
                                            <input type="radio" id="small" />
                                        </label>
                                    </div>
                                    <div class="sidebar__item__size">
                                        <label for="tiny">
                                            9
                                            <input type="radio" id="tiny" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-7">
                            <div class="product__discount">
                                <div class="section-title product__discount__title">
                                    <h2>Sale Off</h2>
                                </div>
                            </div>
                            <div className="row">
                                {product.map((el) => (
                                    <div className="col-md-4">
                                        <Link to='userSingleProduct'>
                                            <div className="card product-pop mb-4">
                                                <img src={USER_URL_IMG + `${el?.product_image}`} className="card-img-top" alt="product image" />
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

                            </div>
                            <div class="filter__item">
                                <div class="row">
                                    <div class="col-lg-4 col-md-5">
                                        <div class="filter__sort">
                                            <span>Sort By</span>
                                            <select>
                                                <option value="0">Default</option>
                                                <option value="0">Default</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="filter__found">
                                            <h6><span>16</span> Products found</h6>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-3">
                                        <div class="filter__option">
                                            <span class="icon_grid-2x2"></span>
                                            <span class="icon_ul"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Product Section End --> */}
        </>
    )
}