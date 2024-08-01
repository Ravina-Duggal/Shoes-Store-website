import { Link } from "react-router-dom"

export default function Menproducts() {
    const Mproducts = [
        {
            product_name: "Adidas",
            price: "3500",
            image: "product-1.jpg",

        },
        {
            product_name: "Puma",
            price: "1500",
            image: "product-2.jpg",

        },
        {
            product_name: "Nike",
            price: "2500",
            image: "product-3.jpg",

        },
        {
            product_name: "Nike",
            price: "2599",
            image: "product-4.jpg",

        },
        {
            product_name: "Nike",
            price: "2599",
            image: "product-4.jpg",

        },
        {
            product_name: "Adidas",
            price: "3500",
            image: "product-1.jpg",

        },
        {
            product_name: "Puma",
            price: "1500",
            image: "product-2.jpg",

        },
        {
            product_name: "Nike",
            price: "2500",
            image: "product-3.jpg",

        },
        {
            product_name: "Adidas",
            price: "3500",
            image: "product-1.jpg",

        },
        {
            product_name: "Puma",
            price: "1500",
            image: "product-2.jpg",

        },
        {
            product_name: "Nike",
            price: "2500",
            image: "product-3.jpg",

        },
        {
            product_name: "Nike",
            price: "2599",
            image: "product-4.jpg",

        },

    ]
    return (
        <>
            <div className="container">
                <h2 className="mb-3 text-center">Men Footwear</h2>
                <div className="row">
                    {Mproducts.map((el) => (
                        <div className="col-md-3">
                            <Link to='/singleProduct'>
                                <div className="card product-pop  mb-3">
                                    <img src={"/assets/img/product/" + `${el.image}`} className="card-img-top" alt="product" />
                                    <div className="card-body">
                                        <h5 className="card-title">{el.product_name}<span className="product-like"><i class="fa fa-heart-o px-2"></i></span></h5>
                                        <p className="card-text">&#8377; {el.price}
                                            <span className="product-rating"><i class="fa fa-star px-2"></i>{el.rating}</span></p>
                                        <p className="card-text"> </p>
                                        {/* <a href="#" className="btn  btn-secondary site-btn">Buy</a> */}
                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}