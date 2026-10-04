import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <HashRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        <Route
          path="/thank-you"
          element={<ThankYou />}
        />

      </Routes>

    </HashRouter>
  );
}

export default App;