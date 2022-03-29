import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { createClient } from "contentful";
import { Container } from "@mui/material";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "dino",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({params}) {
  const { items } = await client.getEntries({
    content_type: "dino",
    "fields.slug": params.slug,
  });

  return {
    props: { dino: items[0] },
  };
}

const slug = ({dino}) => {
    console.log(dino)
  return (
    <Container>
      <PageTitle title="Detail Page" subtitle="subtitle" />
      
    </Container>
  );
};

export default slug;
