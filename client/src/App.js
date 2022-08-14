import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Register from "./components/buyers/Register";
import Login from "./components/buyers/Login";
import Profile from "./components/buyers/Profile";
import NotFound from "./components/NotFound";
import SearchView from "./components/SearchView";
import ProductView from "./components/ProductView";
import CartView from "./components/CartView";
import Checkout from "./components/buyers/Checkout";
import RegisterPersonalInfo from "./components/sellers/RegisterPersonalInfo";
import RegisterStoreInfo from "./components/sellers/RegisterStoreInfo";
import RegisterVerifyInfo from "./components/sellers/RegisterVerifyInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/buyers/login" element={<Login />} />
        <Route path="/buyers/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/buyers/profile" element={<Profile />} />
          <Route path="/buyers/checkout" element={<Checkout />} />
        </Route>

        {/* Seller Protected Routes */}
        <Route
          path="/sellers/register/personalinfo"
          element={<RegisterPersonalInfo />}
        />
        <Route
          path="/sellers/register/storeinfo"
          element={<RegisterStoreInfo />}
        />
        <Route
          path="/sellers/register/verifyinfo"
          element={<RegisterVerifyInfo />}
        />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
