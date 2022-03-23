import React from "react";
import Head from "next/head";
import Card from "../components/Card/Card";
import MyCard from "../components/Card/Card";
import { Button } from "@mui/material";

const About = () => {
  return (
    <>
      <Head>
        <title>TESTING LIST | About</title>
        <meta name="keywords" content="Hello" />
      </Head>
      <div>
        <h1>about</h1>
        <MyCard
          title="Card Title"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloremque a vero"
          action= {<Button>Read More</Button>}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloremque a vero, atque quas explicabo consequuntur quae eos?
          Nesciunt maxime asperiores possimus sunt cum quidem cumque odio dolore
          natus voluptates.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloremque a vero, atque quas explicabo consequuntur quae eos?
          Nesciunt maxime asperiores possimus sunt cum quidem cumque odio dolore
          natus voluptates.
        </p>
      </div>
    </>
  );
};

export default About;
