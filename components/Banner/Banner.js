import React from "react";
import { useStyles } from "./banner-style";
import Image from "next/image";
import { Button, Container, Typography } from "@mui/material";

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Image
        alt="Mountains"
        src="/images/banner/banner-image.jpg"
        objectFit="cover"
        layout="fill"
        quality={100}
        priority="lazy"
      />
      <div className={classes.welcome}>
        <Typography variant="h1">Pre-Storic</Typography>
        <Button color="success" variant="outlined">
          Explore Now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
