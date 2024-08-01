import { Link } from "react-router-dom"
export default function Contact() {
    return (
        <>
            {/* <!-- Hero Section Begin --> */}
            <section className="hero hero-normal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="dropdown">
                                <button className="col-md-12 btn site-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Categories
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link to='/menProducts'><a className="dropdown-item" href="#">Men</a></Link></li>
                                    <li> <Link to='/womenProducts'><a className="dropdown-item" href="#">Women</a></Link></li>
                                    <li><Link to='/kidsProducts'><a className="dropdown-item" href="#">Kids</a></Link></li>
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
                                <h2>Contact Us</h2>
                                <div className="breadcrumb__option">
                                    <Link to='/'>
                                        Home
                                    </Link>
                                    <Link to='/contact'>
                                        <span>Contact Us</span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Section End -->

            <!-- Contact Section Begin --> */}
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_phone"></span>
                                <h4>Phone</h4>
                                <p>+91 9878947313</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_pin_alt"></span>
                                <h4>Address</h4>
                                <p>Nangal shama, Jalandhar</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_clock_alt"></span>
                                <h4>Open time</h4>
                                <p>10:00 am to 23:00 pm</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_mail_alt"></span>
                                <h4>Email</h4>
                                <p>ravinaduggal14@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Section End -->

            <!-- Map Begin --> */}
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.080122670719!2d75.55466831496032!3d31.273878881451807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b6f4b40971d%3A0x976ec73748a966a3!2sKhambra%2C%20Punjab%20144026!5e0!3m2!1sen!2sin!4v1679579708459!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }}></iframe>
                <div className="map-inside">
                    <i className="icon_pin"></i>
                    <div className="inside-widget">
                        <h4>Khambra, Jalandhar</h4>
                        <ul>
                            <li>Phone: +91 9878947313</li>
                            <li>Add: Jalandhar, Punjab</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Map End -->

            <!-- Contact Form Begin --> */}
            <div className="contact-form spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact__form__title">
                                <h2>Leave Message</h2>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <input class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="text" placeholder="Your name" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <input class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" type="text" placeholder="Your Email" />
                            </div>
                            <div className="col-lg-12 text-center">
                                <textarea class="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" placeholder="Your message"></textarea>
                                <button type="submit" className="site-btn">SEND MESSAGE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- Contact Form End --> */}
        </>
    )
}