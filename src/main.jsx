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
    path: "/booking/final",
    element: <FinalDetails />,
  },
  {
    path: "/tenant/bookings",
    element: <AuthenticationGuard component={CustomerBookings} />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/paymentSuccess",
    element: <PaymentSuccess />,
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
