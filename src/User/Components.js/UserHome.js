import { Link } from "react-router-dom"
export default function UserHome() {
    const products = [
        {
            product_name: "Adidas",
            price: "3500",
            image: "product-1.jpg",
            rating: "4.5"


        },
        {
            product_name: "Puma",
            price: "1500",
            image: "product-2.jpg",
            rating: "4.5"


        },
        {
            product_name: "Nike",
            price: "2500",
            image: "product-3.jpg",
            rating: "4.5"


        },
        {
            product_name: "Nike",
            price: "2599",
            image: "product-4.jpg",
            rating: "4.5"


        },
        {
            product_name: "Nike",
            price: "2599",
            image: "product-4.jpg",
            rating: "4.5"


        },
        {
            product_name: "Adidas",
            price: "3500",
            image: "product-1.jpg",
            rating: "4.5"


        },
        {
            product_name: "Puma",
            price: "1500",
            image: "product-2.jpg",
            rating: "4.5"


        },
        {
            product_name: "Nike",
            price: "2500",
            image: "product-3.jpg",
            rating: "4.5"


        },
        {
            product_name: "Adidas",
            price: "3500",
            image: "product-1.jpg",
            rating: "4.5"


        },
        {
            product_name: "Puma",
            price: "1500",
            image: "product-2.jpg",
            rating: "4.5"


        },
        {
            product_name: "Nike",
            price: "2500",
            image: "product-3.jpg",
            rating: "4.5"


        },
        {
            product_name: "Nike",
            price: "2599",
            image: "product-4.jpg",
            rating: "4.5"

        },

    ]
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
                                    <li><a className="dropdown-item" href="#">Men</a></li>
                                    <li><a className="dropdown-item" href="#">Women</a></li>
                                    <li><a className="dropdown-item" href="#">Kids</a></li>
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
                                    <a href="#" className="primary-btn">SHOP NOW</a>
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
                        {products.map((el) => (
                            <div className="col-md-3">
                                <Link to='userSingleProduct'>
                                    <div className="card product-pop  mb-3">
                                        <img src={"/assets/img/product/" + `${el.image}`} className="card-img-top" alt="product image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{el.product_name}<span className="product-like"><i class="fa fa-heart-o px-2"></i></span></h5>
                                            <p className="card-text">&#8377; {el.price}<span className="product-rating"><i class="fa fa-star px-2"></i>{el.rating}</span></p>
                                            {/* <a href="#" className="btn  btn-secondary site-btn">Buy</a> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- Featured Section End -->

           <!-- Latest Product Section Begin --> */}
        </>
    )
}