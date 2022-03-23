import { Button, Container, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MyCard from "../components/Card/Card";
import PageTitle from "../components/PageTitle/PageTitle";
import { useStyles } from "../styles/home-style";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.banner}>
        <Image
          alt="Mountains"
          src="/images/banner/banner-image.jpg"
          objectFit="cover"
          layout="fill"
          width={700}
          height={300}
          quality={100}
        />
        <div className={classes.welcome}>
          <Typography variant="h1">
            Pre-Storic
          </Typography>
          <Button color="success" variant="outlined">
            Explore Now
          </Button>
        </div>
      </div>

      <Container>
        <PageTitle title={"Home"} subtitle={"Developed by : Rifqi Finaldy"} />
      </Container>
    </div>
  );
}
