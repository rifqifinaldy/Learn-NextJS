import { Container } from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
