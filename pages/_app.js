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

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
				build upon. */}

        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

// import { ThemeProvider } from "@mui/material";
// import React from "react";
// import Head from "next/head";
// import Layout from "../components/Layout/Layout";
// import "../styles/globals.css";
// import { theme } from "../styles/theme";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider theme={theme}>

//       <Layout>
//         <Component {...pageProps}/>
//       </Layout>
//     </ThemeProvider>
//   );
// }

// export default MyApp;
