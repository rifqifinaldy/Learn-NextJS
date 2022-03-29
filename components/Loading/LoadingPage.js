import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import { useStyles } from "./loading-style";

const LoadingPage = () => {
  const classes = useStyles();

  return (
    <Container>
      <PageTitle title="Please Wait..." subtitle="Generating Content Data" />
      <Box className={classes.wrapper}
      >
        <Typography className={classes.text} variant="h1">Loading....</Typography>
      </Box>
    </Container>
  );
};

export default LoadingPage;
