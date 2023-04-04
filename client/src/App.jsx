import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payments";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart";

const App = () => {
  // const Navigate = useNavigate();
  const user = useSelector((state) => state.user.name);
  const ProtectedRoute = ({ children }) => {
    if (user) return children;
    return <Navigate to="/sign-up" />;
  };
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />

          <Route path="/products" element={<Products />} />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
