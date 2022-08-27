import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import MovieNavBar from "../molecules/MovieNavBar";

function aboutus() {
  const cardStyle = {
    bgcolor: "#fff4fc",
    display: "block",
    height: "26vw",
    width: "100vw",
    backgroundColor: "#f8f4eb",
  };

  return (
    <div>
      <MovieNavBar></MovieNavBar>
      <Card style={cardStyle}>
        <Typography variant="h5" component="div">
          About us
        </Typography>
      </Card>
    </div>
  );
}

export default aboutus;
