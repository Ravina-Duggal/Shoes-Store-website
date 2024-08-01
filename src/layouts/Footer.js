import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            {/* <!-- Footer Section Begin --> */}
            <footer className="footer spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__about__logo">
                                    <Link to='/'>
                                    <a href="./index.html"><img src="assets/img/logo2.png" alt=""/></a>
                                    </Link>
                                </div>
                                <ul>
                                    <li>Address: Nangal shama, Jalandhar</li>
                                    <li>Phone: +91 9878947313</li>
                                    <li>Email: ravinaduggal14@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div className="footer__widget">
                                <h6>Useful Links</h6>
                                <ul>
                                    <li><Link to='/'>About Our Shop</Link></li>
                                    <li><Link to='/shopcart'>Secure Shopping</Link></li>
                                    <li><Link to='/checkout'>Delivery infomation</Link></li>
                                    <li><Link to='/'>Privacy Policy</Link></li>
                                    <li> <Link to='/'>Our Sitemap</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to='/'>Our Services</Link></li>
                                    <li><Link to='/'>Projects</Link></li>
                                    <li><Link to='/contact'><a href="#">Contact</a></Link></li>
                                    <li><Link to='/'><a href="#">Innovation</a></Link></li>
                                    <li><Link to='/'><a href="#">Testimonials</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer__widget">
                                <h6>Join Our Newsletter Now</h6>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form action="#">
                                    <input type="text" placeholder="Enter your mail"/>
                                        <button type="submit" className="site-btn">Subscribe</button>
                                </form>
                                <div className="footer__widget__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer__copyright">
                                <div className="footer__copyright__text"><p>
                                    
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> <a>Ravina Duggal</a>
                                    
                                    </p></div>
                                <div className="footer__copyright__payment"><img src="img/payment-item.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Footer Section End --> */}
        </>
    )
}