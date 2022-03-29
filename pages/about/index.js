import React from "react";
import { Chip, Container, Divider, Link } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import MyAccordion from "../../components/Accordion/MyAccordion";

const About = () => {
  return (
    <Container sx={{ p: 2 }}>
      <PageTitle title="About" subtitle="About this Project" />
      <p>
        Salute, Im{" "}
        <Link href="https://github.com/rifqifinaldy">Rifqi Finaldy</Link>. Yes
        im the developer of this Website.
      </p>
      <p>
        There&apos;s no real project/company involved in this project. The Main Scope of this project were only for Studying Purpose as im willing to learn Server Side Rendering especially using <strong>React, Next JS</strong>
      </p>
      <p>Below are the tech that i used in this Project :</p>
      <ul>
        <li>React JS</li>
        <li>Next JS</li>
        <li>Contentful</li>
        <li>Material UI</li>
      </ul>
      <Divider
        textAlign="left"
        sx={{
          "&::before, &::after": {
            borderColor: "secondary.light",
          },
        }}
      >
        <Chip label="Pre-Storic" color="success" />
      </Divider>
      <p>
        So What&apos;s Pre-Storic about ?
      </p>
      <p>
        Well, it&apos;s just simple wikipedia about extinct animal from mesozoic era ("Age of Reptiles") . Every source of this extinct animal i copied from wikipedia just to represent it&apos;s real fact about the subject.
      </p>
      <p>
        This Site we&apos;re It's also inspired by Jurrasic Park Wikipedia.
      </p>
    </Container>
  );
};

export default About;
