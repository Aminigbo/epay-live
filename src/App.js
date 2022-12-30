import React from "react";
import Confirmation from "./Pages/Confirmation";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ProductPage from "./Pages/ProductPage";
import PaymentPage from "./Pages/PaymentPage";
import DashBoardPage from "./Pages/DashBoardPage";
import ProductIdPage from "./Pages/ProductIdPage";
import CartPage from "./Pages/CartPage";
import UserAdminPage from "./Pages/UserAdminPage";
import OderIdPage from "./Pages/OderIdPage";
import FAQ from "./others/Footer";


import "./App.css";
import store from './redux/store/index'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {

  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<SignUp />} />
            <Route path="/confirm/:id/:ref" element={<Confirmation />} />
            <Route path="/product/:category" element={<ProductPage />} />
            <Route path="/payment/:id/:method" element={<PaymentPage />} />
            <Route path="/Admin" element={<DashBoardPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/userAdmin" element={<UserAdminPage />} />
            <Route path="/view-products/:id" element={<ProductIdPage />} />
            <Route path="/userAdmin/:id" element={<OderIdPage />} />
            {/* <Login /> */}
            {/*  */}
            {/* */}

            <Route path="/faq" element={<FAQ content={"FAQ's"} />} />
            <Route path="/returnpolicy" element={<FAQ content={"Epay return policy"} />} />
            <Route path="/privacypolicy" element={<FAQ content={"Privacy Policy"} />} />
            <Route path="/tc" element={<FAQ content={"T & C"} />} />
            <Route path="/deliveryinfo" element={<FAQ content={"Delivery Information"} />} />
            <Route path="/aboutus" element={<FAQ content={"About Us"} />} />

          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}
















