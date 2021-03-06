import { Button, Container, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useStyles } from "../styles/home-style";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
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
          <Link href="/dino">
            <Button color="success" variant="outlined">
              Explore Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
