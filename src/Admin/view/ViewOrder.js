export default function ViewOrder() {
    const order = [
        {
            order_number: "1",
            product_details: "Adidas",
            price: "3500",
            sub_total: "3500",
            quantity: "1",
            image: "product-1.jpg",
            user_name: "Aman",
            address: "Jalandhar",
            contact: "6285555889",
            status: "pending",

        },
        {
            order_number: "2",
            product_details: "Puma",
            price: "1500",
            quantity: "2",
            sub_total: "3000",
            image: "product-2.jpg",
            user_name: "John",
            address: "Ludhiana",
            contact: "70865555589",
            status: "pending",
        },
        {
            order_number: "3",
            product_details: "Nike",
            price: "2500",
            quantity: "1",
            sub_total: "2500",
            image: "product-3.jpg",
            user_name: "Virat ",
            address: "Bathinda",
            contact: "925555555",
            status: "complete",



        },
        {
            order_number: "4",
            product_details: "Nike",
            price: "2599",
            quantity: "1",
            sub_total: "2599",
            image: "product-4.jpg",
            user_name: "Rohit Sharma",
            address: "Phagwara",
            contact: "875555555",
            status: "pending",

        }
    ]
    return (
        <>
            <div className="container table-responsive mt-5 ">
            <h2 className="contact__form__title">Manage Order</h2>
                <table className="table border table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Order No.</th>
                            <th>Product Details</th>
                            <th>Price</th>
                            <th>Sub Total</th>
                            <th>Quantity</th>
                            <th>Images</th>
                            <th>User Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {order.map((el, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{el.product_details}</td>
                            <td>{el.price}</td>
                            <td>{el.sub_total}</td>
                            <td>{el.quantity}</td>
                            <td>
                                <img src={"/assets/img/product/" + `${el.image}`}
                                    style={{ height: "100px" }} />
                            </td>
                            <td>{el.user_name}</td>
                            <td>{el.address}</td>
                            <td>{el.contact}</td>
                            <td>{el.status}</td>
                            <td><button className="btn btn-outline-success">Edit</button></td>
                            <td><button className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}
