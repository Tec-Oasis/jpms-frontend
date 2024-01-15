import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import BookingDetails from "./BookingDetails/BookingDetails";
import FinalDetails from "./FinalDetails/FinalDetails";
import CustomerBookings from "./CustomerBookings/CustomerBookings";
import ContactPage from "./ContactPage";
import PaymentSuccess from "./PaymentSuccess";

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
    element: <CustomerBookings />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/paymentSuccess",
    element: <PaymentSuccess />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-zmqxdvzto7imu71d.us.auth0.com"
      clientId="1K1T84W3lvh0BMcoxWytVHDWq0swwENd"
      redirectUri={window.location.origin}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
