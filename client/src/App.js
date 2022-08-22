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
import LoginAdmin from "./components/sys/LoginAdmin";
import RegisterForm from "./components/sellers/RegisterForm";
import RegisterSuccess from "./components/sellers/RegisterSuccess";
import SellerRequests from "./components/sys/moderators/SellerRequests";
import SellerRequestDetails from "./components/sys/moderators/SellerRequestDetails";
import SellerLogin from "./components/sellers/SellerLogin";
import SellerProfile from "./components/sellers/SellerProfile";
import Listings from "./components/sellers/Listings";
import AddListing from "./components/sellers/AddListing";
import AdminProfile from "./components/sys/admins/AdminProfile";
import ModeratorProfile from "./components/sys/moderators/ModeratorProfile";
import Unauthorized from "./components/Unauthorized";
import ViewModerators from "./components/sys/admins/ViewModerators";
import AddModerators from "./components/sys/admins/AddModerators";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/buyers/login" element={<Login />} />
        <Route path="/buyers/register" element={<Register />} />

        {/* Seller Routes */}
        <Route path="/sellers/register" element={<RegisterForm />} />
        <Route path="/sellers/register/success" element={<RegisterSuccess />} />
        <Route path="/sellers/login" element={<SellerLogin />} />

        {/* Seller Protected Routes */}
        <Route element={<RequireAuth allowedRole={2347} />}>
          <Route path="/sellers/profile" element={<SellerProfile />} />
          <Route path="/sellers/profile/listings" element={<Listings />} />
          <Route path="/sellers/profile/newlisting" element={<AddListing />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/sys/login" element={<LoginAdmin />} />

        {/* Admin ProtectedRoutes */}
        <Route element={<RequireAuth allowedRole={2436} />}>
          <Route path="/sys/admins/profile" element={<AdminProfile />} />
          <Route
            path="/sys/admins/viewmoderators"
            element={<ViewModerators />}
          />
          <Route path="/sys/admins/addmoderators" element={<AddModerators />} />
        </Route>

        {/* Moderator Protected Routes */}
        <Route element={<RequireAuth allowedRole={9871} />}>
          <Route
            path="/sys/moderators/profile"
            element={<ModeratorProfile />}
          />
          <Route
            path="/sys/moderators/sellerrequests"
            element={<SellerRequests />}
          />
          <Route
            path="/sys/moderators/sellerrequests/:id"
            element={<SellerRequestDetails />}
          />
        </Route>
        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRole={5150} />}>
          <Route path="/buyers/profile" element={<Profile />} />
          <Route path="/buyers/checkout" element={<Checkout />} />
        </Route>

        {/* unauthorized route */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
