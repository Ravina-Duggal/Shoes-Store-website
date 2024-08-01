import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-3">
                        <div class="card admin-card shadow  p-4">
                            <div class="card-body">
                                <h3 class="card-title text-light">Total Orders</h3>
                                <Link to='viewOrder'><a class="card-link link-light">Orders</a></Link>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-4 mt-3">
                        <div class="card admin-card shadow p-4" >
                            <div class="card-body">
                                <h3 class="card-title text-light">Users</h3>
                                {/* <h6 class="card-subtitle mb-2 text-light">Card subtitle</h6> */}
                                {/* <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <Link to='viewUser'><a class="card-link link-light">View Users</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mt-3">
                        <div class="card admin-card shadow p-4" >
                            <div class="card-body">
                                <h3 class="card-title text-light">Products</h3>
                                {/* <h6 class="card-subtitle mb-2 text-light">Card subtitle</h6> */}
                                {/* <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <Link to='viewproduct'><a class="card-link link-light">View Products</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}