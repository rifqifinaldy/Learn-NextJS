import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import "../styles/globals.css";
import createEmotionCache from "../src/createEmotionCache";
import Layout from "../components/Layout/Layout";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const route = props.router.pathname.substring(1);
  const pageName = route.charAt(0).toUpperCase() + route.slice(1);
  
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Pre-Storic | {pageName === "" ? "Home" : pageName}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {([`/`].includes(props.router.pathname))? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
