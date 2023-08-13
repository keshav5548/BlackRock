import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";

import ProductDetails from "./components/Product/ProductDetails.js";
import Products from "./components/Product/Products.js";
import Search from "./components/Product/Search.js";
import LoginSignUp from "./components/User/LoginSignUp.js";
import store from "./store.js";
import { loadUser } from "./actions/userAction.js";
import UserOptions from "./components/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./components/User/Profile.js";
import ProtectedRoute from "./components/Route/ProtectedRoute.js";
import UpdateProfile from "./components/User/UpdateProfile.js";
import Cart from "./components/Cart/Cart.js";

import MyOrders from "./components/Order/MyOrders.js";
import Dashboard from "./components/Admin/Dashboard.js";
import NewProduct from "./components/Admin/NewProduct.js";
import UpdateUser from "./components/Admin/UpdateUser.js";
import Navbar from "./components/Navbar/navbar.js";
import Merchant from "./components/Merchant/merchant";
import Paytm from "./components/Merchant/paytm";
import Phonepe from "./components/Merchant/phonepe";
import Googlepay from "./components/Merchant/googlepay";
import Blog from "./components/Blog/Blog";
import FinanceQuiz from "./components/Quiz/Quiz";
import Home from "./components/Hoome/home";
import AboutUs from "./components/AboutUs/AboutUs.js";
import News from "./components/News/News.js";
import Stock from "./components/Stock/Stock.js";
import Calc from "./Calculator/Calc.js";
import Api from "./components/API/api.js";
import GovernmentSchemes from "./components/GovernmentSchemes/GovernmentSchemes.js";
import Farmer from "./components/GovernmentSchemes/Farmer.js";
import Labour from "./components/GovernmentSchemes/Labour.js";
import Student from "./components/GovernmentSchemes/Student.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <Router>
      <Navbar />
      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:keyword" element={<Products />} />
        <Route exact path="/Search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/online" element={<Merchant />} />
        <Route path="/paytm" element={<Paytm />} />
        <Route path="/phonepe" element={<Phonepe />} />
        <Route path="/googlepay" element={<Googlepay />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/quiz" element={<FinanceQuiz />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/api" element={<Api />} />
        <Route path="/schemes" element={<GovernmentSchemes />} />
        <Route path="/student" element={<Student />} />
        <Route path="/labour" element={<Labour />} />
        <Route path="/farmer" element={<Farmer />} />

        <Route
          exact
          path="/account"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/me/update"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/admin/product"
          element={
            <ProtectedRoute isAdmin={true}>
              <NewProduct />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/admin/user/:id"
          element={
            <ProtectedRoute isAdmin={true}>
              <UpdateUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
