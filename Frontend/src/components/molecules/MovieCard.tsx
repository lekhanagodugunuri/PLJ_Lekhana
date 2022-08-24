import { Button, Card } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovie } from "../../MovieService";


import BuyButton from "../atoms/BuyButton";

import DetailButton from "../atoms/DetailButton";
  
type Movie = {
  movieId: string;
  movieName: string;
  movieGenre: string;
  moviePrice: string;
};

export default function MovieCard1() {
  const [movieN, setMovieName] = useState<Movie[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("oeksakdgfj");
    getMovie()
      .then((response) => setMovieName(response))
      .catch((error) => console.log(error));
  }, []);

  const imageStyle = {
    height: "15vw",
    width: "18vw",
  };
  const cardStyle = {
    bgcolor: "#fff4fc",
    display: "block",
    height: "30vw",
    width: "30vw",
    backgroundColor: '#f8f4eb',
  };

  return (
    <div className="card">
      {movieN.map((movie: Movie) => {
        return (
          <div>
            <Card style={cardStyle}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1ptemhH88HIHHHHKV_gEsfUtRjWsrVzO0w&usqp=CAU"
                alt=""
                style={imageStyle}
              />
              <p>Name: {movie.movieName}</p>
              <p>Price: {movie.moviePrice}</p>
              <BuyButton></BuyButton>
              <Button
                onClick={() => {
                  navigate("/movies/" + movie.movieId);
                }}
              >
                More Details
              </Button>
              </Card>
          </div>
        );
      })}
    </div>
  );
}
