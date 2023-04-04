import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const user = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
        style={{ marginTop: "10px" }}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
