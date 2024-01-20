import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import BookingDetails from "./BookingDetails/BookingDetails";
import FinalDetails from "./FinalDetails/FinalDetails";
import CustomerBookings from "./CustomerBookings/CustomerBookings";
import ContactPage from "./ContactPage";
import PaymentSuccess from "./PaymentSuccess";
import CallbackComp from "./components/CallbackComp";
import { AuthenticationGuard } from "./components/authentication-guard";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import PropertyMap from "./PropertyList/PropertyMap/PropertyMap";
import TenantDashboard from "./TenantDashboard/TenantDashboard";
import ProfilePage from "./profilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/booking",
    element: <BookingDetails />,
  },
  {
    path: "/booking/:id",
    element: <BookingDetails />,
  },
  {
    path: "/booking/final",
    element: <FinalDetails />,
  },
  {
    path: "/booking/final/:id",
    element: <FinalDetails />,
  },
  {
    path: "/tenant/bookings",
    element: <AuthenticationGuard component={CustomerBookings} />,
  },
  {
    path: "/propertyMap",
    element: <PropertyMap />,
  },
  {
    path: "/tenantDashboard/:id",
    element: <TenantDashboard />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/paymentSuccess/:id",
    element: <PaymentSuccess />,
  },
  {
    path: "/profile",
    element: <AuthenticationGuard component={ProfilePage} />,
  },
  {
    path: "/callback",
    element: <CallbackComp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0ProviderWithNavigate>
    <RouterProvider router={router} />
  </Auth0ProviderWithNavigate>
);
