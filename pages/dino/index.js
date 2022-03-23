import React from "react";
import { createClient } from "contentful";
import MyCard from "../../components/Card/Card";
import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import PageTitle from "../../components/PageTitle/PageTitle";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "dino",
  });
  return {
    props: {
      dino: res.items,
    },
  };
}

const index = ({ dino }) => {
  return (
    <Container sx={{ p: 2 }}>
      <PageTitle title="Dinosaur Wiki" subtitle="Under Dev" />
      <Grid container spacing={2}>
        {dino.map((dino, i) => {
          return (
            <Grid key={dino.sys.id} item xs={4}>
              <MyCard
                title={dino.fields.title}
                body=""
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default index;
