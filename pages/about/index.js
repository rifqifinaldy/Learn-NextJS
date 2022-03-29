import React from "react";
import Head from "next/head";
import Card from "../../components/Card/Card";
import MyCard from "../../components/Card/Card";
import { Button, Container } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";

const About = () => {
  return (
    <Container>
      <PageTitle 
        title="About"
        subtitle="About this Project"
      />
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="error" variant="contained">
          Error
        </Button>
        <Button color="warning" variant="contained">
          Warning
        </Button>
        <Button color="info" variant="contained">
          Info
        </Button>
        <Button color="success" variant="contained">
          Success
        </Button>
    </Container>
  );
};

export default About;
