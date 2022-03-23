import { ThemeProvider } from "@mui/material";
import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
