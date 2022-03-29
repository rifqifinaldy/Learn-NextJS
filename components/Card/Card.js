import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";
import Image from "next/image";
import { useStyles } from "./card-styles";

const MyCard = ({ title, body, action, thumbnail, link }) => {
  const classes = useStyles();

  return (
    <Card raised={true} sx={{ maxWidth: 345 }} color="primary" className={classes.card}>
      <CardMedia>
        <Image src={thumbnail} layout="responsive" width={700} height={475} />
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="text.primary"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>{action}</CardActions>
    </Card>
  );
};

export default MyCard;
