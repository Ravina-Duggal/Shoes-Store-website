import { Link } from "react-router-dom"

export default function ViewUsers() {
    const users = [
        {

            email: "aman@gmail.com",
            user_name: "Aman",
            address: "Jalandhar",
            contact: "6285555889",


        },
        {

            email: "john@gmail.com",
            user_name: "John",
            address: "Ludhiana",
            contact: "70865555589",

        },
        {
            email: "virat@gmail.com",
            user_name: "Virat ",
            address: "Bathinda",
            contact: "925555555",




        },
        {
            email: "rohit@gmail.com",
            user_name: "Rohit Sharma",
            address: "Phagwara",
            contact: "875555555",

        }
    ]
    return (
        <>
            <div className="container table-responsive mt-5">
            <h2 className="contact__form__title">Manage Users</h2>
                <table className="table border table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Email</th>
                            <th>User Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {users.map((el, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{el.email}</td>
                            <td>{el.user_name}</td>
                            <td>{el.address}</td>
                            <td>{el.contact}</td>
                            <td><Link to="updateUser"><button className="btn btn-outline-success">Edit</button></Link></td>
                            <td><button className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}