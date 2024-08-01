import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Master from './Master';
import Contact from './Components/Contact';
import Checkout from './User/Components.js/Checkout';
import Shoppingcart from './User/Components.js/Shoppingcart';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Dashboard from './Admin/Dashboard/Dashboard';
import ViewProduct from './Admin/view/ViewProduct';
import ViewOrder from './Admin/view/ViewOrder';
import AddProduct from './Admin/Add/AddProduct';
// import AddCategory from './Admin/Add/AddCategory';
import AdminMaster from './Admin/AdminMaster';
import MainCategory from './Admin/Add/MainCategory';
import SubCategory from './Admin/Add/SubCategory';
import ViewUsers from './Admin/view/ViewUsers';
import ViewSubCategory from './Admin/view/ViewSubCategory';
import ViewCategory from './Admin/view/ViewCategory';
import SingleProduct from './Components/SingleProduct';
import UserMaster from './User/UserMaster';
import UserHome from './User/Components.js/UserHome';
import UserContact from './User/Components.js/UserContact';
import UserShop from './User/Components.js/UserShop';
import UserSingleProduct from './User/Components.js/UserSingleProduct';
import Menproducts from './Components/Products/Menproducts';
import Kidsproducts from './Components/Products/Kidsproducts';
import Womenproducts from './Components/Products/Womenproducts';
import UserProfile from './User/layouts/UserProfile';
import Shop1 from './Components/Shop1';
import UpdateCategory from './Admin/Update/UpdateCategory';
import UpdateSubCategory from './Admin/Update/UpdateSubCategory';
import UpdateProduct from './Admin/Update/UpdateProduct';
import UpdateUser from './Admin/Update/UpdateUser';
import ProductCategory from './User/Components.js/ProductCategory';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Master />} >
            <Route path='/' element={<Home />} />
            {/* Shop Dopdown routes */}
            {/* <Route path='/shop' element={<Shop />} /> */}
            <Route path='/shop' element={<Shop1 />} />
            <Route path='/menCat' element={<Shop />} />
            <Route path='/womenCat' element={<Shop />} />
            <Route path='/kidsCat' element={<Shop />} />
            <Route path='/singleProduct' element={<SingleProduct />} />
            {/* <Route path='/profile' element={<UserProfile />} /> */}
            
            {/* Contact Routes */}
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/menProducts' element={<Menproducts />} />
            <Route path='/womenProducts' element={<Womenproducts />} />
            <Route path='/kidsProducts' element={<Kidsproducts />} />
            <Route path='/shop/menProducts/:id' element={<Menproducts />} />
            <Route path='/shop/womenProducts' element={<Womenproducts />} />
            <Route path='/shop/kidsProducts' element={<Kidsproducts />} />


          </Route>

          {/* Admin Dashboard Routes start */}
          <Route path='/admindashboard' element={<AdminMaster />} >
            <Route path='/admindashboard' element={<Dashboard />} />
            {/* Category dropdown routes */}
            {/* <Route path='category' element={<AddCategory />} /> */}
            <Route path='mainCategory' element={<MainCategory />} />
            <Route path='subCategory' element={<SubCategory />} />
            <Route path='addproduct' element={<AddProduct />} />
            <Route path='viewproduct/addproduct' element={<AddProduct />} />

            {/* Update Routes start */}
            <Route path='updateCategory' element={<UpdateCategory />} />
            <Route path='updateSubCategory' element={<UpdateSubCategory />} />
            <Route path='updateProduct' element={<UpdateProduct />} />
            <Route path='viewCategory/updateCategory/:id' element={<UpdateCategory />} />
            <Route path='viewSubCategory/updateSubCategory/:id' element={<UpdateSubCategory />} />
            <Route path='viewproduct/updateProduct/:id' element={<UpdateProduct />} />
            {/* Update Routes End */}

            {/* View Category Routes */}
            <Route path='viewproduct' element={<ViewProduct />} />
            <Route path='/admindashboard/viewproduct' element={<ViewProduct />} />
            <Route path='viewUser' element={<ViewUsers />} />
            <Route path='viewUser/updateUser' element={<UpdateUser />} />
            <Route path='viewOrder' element={<ViewOrder />} />
            <Route path='viewCategory' element={<ViewCategory />} />
            <Route path='/admindashboard/viewCategory' element={<ViewCategory />} />
            <Route path='viewSubCategory' element={<ViewSubCategory />} />
            <Route path='/admindashboard/viewSubCategory' element={<ViewSubCategory />} />
          </Route>
          {/* Admin Dashboard Routes End */}

          {/* User Panel Routes Start */}
          <Route path='/user' element={<UserMaster />}>
            <Route path='/user' element={<UserHome />} />
            <Route path='/user/productcategory' element={<ProductCategory />} />

            <Route path='shopcart' element={<Shoppingcart />} />
            <Route path='shop/userSingleProduct/shopcart' element={<Shoppingcart />} />
            <Route path='userSingleProduct/shopcart' element={<Shoppingcart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='shop/userSingleProduct/shopcart/checkout' element={<Checkout />} />
            <Route path='shopcart/contact' element={<UserContact />} />
            <Route path='contact' element={<UserContact />} />
            <Route path='shop' element={<UserShop />} />
            <Route path='userSingleProduct' element={<UserSingleProduct />} />
            <Route path='shop/userSingleProduct' element={<UserSingleProduct />} />
            <Route path='/user/profile' element={<UserProfile/>} />
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
