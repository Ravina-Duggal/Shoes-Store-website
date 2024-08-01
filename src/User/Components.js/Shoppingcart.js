import { Link } from "react-router-dom";

export default function Shoppingcart() {
    return (
        <>
            {/* <!-- Hero Section Begin --> */}
            <section className="hero hero-normal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
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
                        <div className="col-lg-9">
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
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Hero Section End -->

            <!-- Breadcrumb Section Begin --> */}
            <section className="breadcrumb-section set-bg" style={{ backgroundImage: "url('/assets/img/shoe.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Shopping Cart</h2>
                                <div className="breadcrumb__option">
                                    <Link to='/'>
                                        <a href="./index.html">Home</a>
                                    </Link>
                                    <Link to='/shopcart'>
                                        <span>Shopping Cart</span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Section End -->

            <!-- Shoping Cart Section Begin --> */}
            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                        <tr>
                                            <td className="shoping__cart__item">
                                                <img src="/assets/img/cart/cart-1.jpg" alt="" />
                                                <h5>Nike</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                &#8377;999
                                            </td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" value="1" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                &#8377;999.00
                                            </td>
                                            <td className="shoping__cart__item__close">
                                                <span className="icon_close"></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="shoping__cart__item">
                                                <img src="/assets/img/cart/cart-2.jpg" alt="" />
                                                <h5>Nike</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                &#8377;2199
                                            </td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" value="1" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                &#8377;2199
                                            </td>
                                            <td className="shoping__cart__item__close">
                                                <span className="icon_close"></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="shoping__cart__item">
                                                <img src="/assets/img/cart/cart-3.jpg" alt="" />
                                                <h5>Puma</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                &#8377;1299
                                            </td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" value="1" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                &#8377;1299
                                            </td>
                                            <td className="shoping__cart__item__close">
                                                <span className="icon_close"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <a href="#" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                                <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                                    Upadate Cart</a>
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Enter your coupon code" />
                                        <button type="submit" className="site-btn">APPLY COUPON</button>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>&#8377;4497</span></li>
                                    <li>Total <span>&#8377;4497</span></li>
                                </ul>
                                <Link to='checkout'><a className="primary-btn">PROCEED TO CHECKOUT</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Shoping Cart Section End --> */}
        </>
    )
}