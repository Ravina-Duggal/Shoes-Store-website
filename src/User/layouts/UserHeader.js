import { Link } from "react-router-dom";

export default function UserHeader() {
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
                                        <img src="assets/img/language.png" alt=""/>
                                            <div>English</div>
                                            <span className="arrow_carrot-down"></span>
                                            <ul>
                                                <li><a href="#">Hindi</a></li>
                                                <li><a href="#">English</a></li>
                                            </ul>
                                    </div> */}
                                    {/* <div className="header__top__right__auth">
                                        <Link to='/login'>
                                        <i className="fa fa-user"></i> Logout
                                        </Link>                                     
                                    </div> */}
                                

                                {/* profile Button Start */}
                                    <button className="buy-tickets scrollto " type="button"  data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user"></i></button>
                        <li className="nav-item dropdown pe-3">
                            

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                             
                                <img src="/assets/img/profile-img2.jpg" alt="Profile" className="rounded-circle img-fluid mb-2"/>
                            {/* <!-- End Profile Iamge Icon --> */}
                                    <h6 className="d-flex justify-content-center">Ravina Duggal</h6>
                                    <span className="d-flex justify-content-center">Full Stack Developer</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>

                                <Link to="profile"><li>
                                    <a className="dropdown-item d-flex align-items-center profile-color link-light">
                                       
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                </Link>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>


                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-gear"></i>
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i className="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>

                                <Link to="/login">
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                    <i className="fa fa-user me-2"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                                </Link>

                            </ul>
                            {/* <!-- End Profile Dropdown Items --> */}
                        </li>
                        {/* <!-- End Profile Nav --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <a href="./index.html"><img src="/assets/img/logo2.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active">
                                        <Link to='/user'>
                                        Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/user/productcategory'>
                                        Shop
                                        </Link>
                                    </li>
                                    <li><Link to='checkout'>Check Out</Link></li>
                                    {/* <li><Link to='userSingleProduct'>Single Product</Link></li> */}
                                    {/* <li>
                                        <Link to='shopcart'>
                                        Shoping Cart
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link to='contact'>
                                        Contact
                                        </Link>
                                    </li>
                                </ul>    
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                    <li><Link to='shopcart'><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></Link></li>
                                </ul>
                                <div className="header__cart__price">item: <span>&#8377;4497.00</span></div>
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