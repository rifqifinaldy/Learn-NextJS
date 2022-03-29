import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";
import Image from "next/image";

const MyCard = ({ title, body, action, thumbnail, link }) => {
  return (
    <Card raised={true} sx={{ maxWidth: 345 }}>
      <CardMedia>
        <Image src={thumbnail} layout="responsive" width={700} height={475} />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
