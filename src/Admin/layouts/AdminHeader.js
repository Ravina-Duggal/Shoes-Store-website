import { Link } from "react-router-dom"
export default function AdminHeader() {
    return (
        <>
            <div className="container mt-4 mb-5">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <h3>Admin</h3>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <nav className="header__menu">
                            <ul>
                                <li className="active">
                                    <Link to='/admindashboard'>
                                        Dashboard
                                    </Link>
                                </li>
                                {/* <li> 
                                    <Link to='addproduct'><a href="#">Product</a></Link>
                                    </li> */}
                                <li>
                                    <Link to='mainCategory'>Category</Link>
                                    <ul className="header__menu__dropdown">
                                        <li><Link to='mainCategory'>Add Category</Link></li>
                                        <li><Link to='viewCategory'>View Category</Link></li>
                                        {/* <li><Link to='updateCategory'>Update Category</Link></li> */}
                                    </ul>
                                </li>
                                <li>
                                    <Link to='subCategory'>Sub Category</Link>
                                    <ul className="header__menu__dropdown">
                                        <li><Link to='subCategory'>Add Sub Category</Link></li>
                                        <li><Link to='viewSubCategory'>View Sub Category</Link></li>
                                        {/* <li><Link to='updateSubCategory'>Update Sub Category</Link></li> */}
                                    </ul>
                                </li>
                                <li>
                                    <Link to='addproduct'>Products</Link>
                                    <ul className="header__menu__dropdown">
                                        <li><Link to='addproduct'>Add Product</Link></li>
                                        <li><Link to='viewproduct'>View Product</Link></li>
                                        {/* <li><Link to='updateproduct'>Update Product</Link></li> */}
                                    </ul>
                                </li>
                                <li>
                                    <Link to='viewOrder'>Orders</Link>
                                    <ul className="header__menu__dropdown">
                                        <li><Link to='viewOrder'>View Order</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to='viewOrder'>Users</Link>
                                    <ul className="header__menu__dropdown">
                                        <li><Link to='viewUser'>View Users</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to='/login'>
                                        Logout
                                    </Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    {/* <Link to='subCategory'><h5>SubCategory</h5></Link> */}

                </div>
            </div>
        </>
    )
}