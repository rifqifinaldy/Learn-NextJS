import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { createClient } from "contentful";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

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

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "dino",
    "fields.slug": params.slug,
  });

  return {
    props: { dino: items[0] },
  };
}

const slug = ({ dino }) => {
  const { featuredImage, title, kind, periode, description, headline } =
    dino.fields;
  return (
    <Container>
      <PageTitle title={title} subtitle={headline} />
      <Box
        mb={2}
        sx={{
          width: "100%",
          height: "50vh",
          position: "relative",
        }}
      >
        <Image
          src={"https:" + featuredImage.fields.file.url}
          priority="immediately"
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {kind.map((tag, i) => {
          return (
            <Typography mr={1} variant="caption" display="block" gutterBottom>
              #{tag}
            </Typography>
          );
        })}
      </Box>
      <Box>{documentToReactComponents(description)}</Box>
      <hr/>
      <Link href="/dino">
      <Button color="success" variant="outlined">View Other</Button>
      </Link>
    </Container>
  );
};

export default slug;
