import { Button, Card, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useFormik } from "formik";
import { addMovie } from "../../MovieService";
import MovieNavBar from "../molecules/MovieNavBar";

export default function MovieCreate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      movieName: "",
      moviePrice: "",
    },
    onSubmit: (values) => {
      handleSubmit(values.movieName, values.moviePrice);
      console.log("hier", values);
    },
  });
  const handleSubmit = (movieName: string, moviePrice: string) => {
    addMovie({
      movieName: movieName,
      moviePrice: moviePrice,
      movieId: "",
      movieGenre: "",
    })
      .then((response: any) => {
        console.log("response", response);
        navigate("/movies");
      })
      .catch((e: any) => {
        postMessage(e.response.data);
      });
  };
  return (
    <div>
    <MovieNavBar></MovieNavBar>
    <form onSubmit={formik.handleSubmit}>
      <div>
        <h1>New Movie</h1>
        <label htmlFor="movieName">Name</label>
        <input
          id="movieName"
          name="movieName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.movieName}
        />
      </div>
      <div>
        <label htmlFor="moviePrice">Price</label>
        <input
          id="moviePrice"
          name="moviePrice"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.moviePrice}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
