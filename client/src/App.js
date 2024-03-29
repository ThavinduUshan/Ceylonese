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
import AdminProfile from "./components/sys/admins/AdminProfile";
import ModeratorProfile from "./components/sys/moderators/ModeratorProfile";
import Unauthorized from "./components/Unauthorized";
import ViewModerators from "./components/sys/admins/ViewModerators";
import AddModerators from "./components/sys/admins/AddModerators";
import AddLisitingForm from "./components/sellers/AddLisitingForm";
import AuctionView from "./components/AuctionView";
import Auctions from "./components/sellers/Auctions";
import PartnershipRequest from "./components/sellers/PartnershipRequest";
import PartnershipAccept from "./components/sellers/PartnershipAccept";
import PartnershipsRequests from "./components/sellers/PartnershipsRequests";
import PartnershipsEnded from "./components/sellers/PartnershipsEnded";
import PartnershipsActive from "./components/sellers/PartnershipsActive";
import BuyerChats from "./components/chat/BuyerChats";
import Support from "./components/buyers/Support";
import Chat from "./components/chat/Chat";
import SellerChats from "./components/chat/SellerChats";
import SellerOrders from "./components/sellers/SellerOrders";
import SellerOrdersCompleted from "./components/sellers/SellerOrdersCompleted";
import SellerOrdersShipped from "./components/sellers/SellerOrdersShipped";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/auction" element={<AuctionView />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/auction/:id" element={<AuctionView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/buyers/login" element={<Login />} />
        <Route path="/buyers/register" element={<Register />} />
        <Route path="/product/:id/:pid" element={<PartnershipView />} />
        <Route path="/product/form/:id" element={<ProductViewForm />} />

        {/* Seller Routes */}
        <Route path="/sellers/register" element={<RegisterForm />} />
        <Route path="/sellers/register/success" element={<RegisterSuccess />} />
        <Route path="/sellers/login" element={<SellerLogin />} />

        {/* Seller Protected Routes */}
        <Route element={<RequireAuth allowedRole={2347} />}>
          <Route path="/sellers/profile" element={<SellerProfile />} />
          <Route path="/sellers/profile/listings" element={<Listings />} />
          <Route path="/sellers/profile/auctions" element={<Auctions />} />
          <Route
            path="/sellers/profile/newlisting"
            element={<AddLisitingForm />}
          />
          <Route
            path="/sellers/partnerships/request/:id"
            element={<PartnershipRequest />}
          />
          <Route
            path="/sellers/partnerships/accept/:id"
            element={<PartnershipAccept />}
          />
          <Route
            path="/sellers/partnerships/details/:id"
            element={<PartnershipDetailsForm />}
          />
          <Route
            path="/sellers/partnerships/requests"
            element={<PartnershipsRequests />}
          />
          <Route
            path="/sellers/partnerships/active"
            element={<PartnershipsActive />}
          />
          <Route
            path="/sellers/partnerships/ended"
            element={<PartnershipsEnded />}
          />
          <Route path="/sellers/chat" element={<SellerChats />} />

          <Route path="/sellers/orders/" element={<SellerOrders />} />
          <Route
            path="/sellers/orders/shipped"
            element={<SellerOrdersShipped />}
          />
          <Route
            path="/sellers/orders/completed"
            element={<SellerOrdersCompleted />}
          />
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
          <Route
            path="/sys/moderators/support/"
            element={<SupportTicketIssues />}
          />
          <Route
            path="/sys/moderators/support/:id"
            element={<SupportTicketIssuesDetails />}
          />
          <Route path="/sys/moderators/complains/" element={<Complains />} />
          <Route
            path="/sys/moderators/complains/:id"
            element={<ComplainDetails />}
          />
        </Route>

        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRole={5150} />}>
          <Route path="/buyers/profile" element={<Profile />} />
          <Route path="/buyers/checkout" element={<Checkout />} />
          <Route path="/buyers/support" element={<Support />} />
          <Route path="/buyers/orders" element={<BuyerOrders />} />
          <Route
            path="/buyers/orders/completed"
            element={<BuyerOrdersCompleted />}
          />
          <Route path="/buyers/order/review/:id" element={<AddRating />} />
          <Route path="/buyers/biddings" element={<BuyerBids />} />
          <Route path="/buyers/biddings/ended" element={<BuyerBidsEnded />} />
          <Route path="/buyers/biddings/won" element={<BuyerBidsWon />} />
          <Route path="/buyers/chat" element={<BuyerChats />} />
        </Route>

        {/* unauthorized route */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<RequireAuth allowedRole={2347} allowedRole2={5150} />}>
          <Route path="/chat/:id" element={<Chat />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
