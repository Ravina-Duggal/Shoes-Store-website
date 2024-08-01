import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            {/* <!-- Header Section Begin --> */}
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><i className="fa fa-envelope"></i> ravinaduggal14@gmail.com</li>
                                        <li>Free Shipping for all Order of &#8377;999</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <a href="https://www.facebook.com/" target={"_blank"}><i className="fa fa-facebook"></i></a>
                                        <a href="https://twitter.com/?lang=en" target={"_blank"}><i className="fa fa-twitter"></i></a>
                                        <a href="https://www.linkedin.com/" target={"_blank"}><i className="fa fa-linkedin"></i></a>
                                        <a href="https://in.pinterest.com/" target={"_blank"}><i className="fa fa-pinterest-p"></i></a>
                                    </div>
                                    {/* <div className="header__top__right__language">
                                        <img src="assets/img/language.png" alt="" />
                                        <div>English</div>
                                        <span className="arrow_carrot-down"></span>
                                        <ul>
                                            <li><a href="#">Hindi</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
                                    </div> */}
                                    <div className="header__top__right__auth">
                                        <Link to='/login'>
                                            <i className="fa fa-user"></i> Login
                                        </Link>

                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <a href="./index.html"><img src="assets/img/logo2.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active">
                                        <Link to='/'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/shop'>
                                            Shop
                                        </Link>
                                    </li>
                                    {/* <li><Link to='/singleProduct'>Single Product</Link></li> */}
                                    <li>
                                        <Link to='/contact'>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><Link to='/login'><a href="#"><i className="fa fa-heart"></i> <span>0</span></a></Link></li>
                                    <li><Link to='/login'><a href="#"><i className="fa fa-shopping-bag"></i> <span>0</span></a></Link></li>
                                </ul>
                                <div className="header__cart__price">item: <span>&#8377;00.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
            {/* <!-- Header Section End --> */}
        </>
    )
}