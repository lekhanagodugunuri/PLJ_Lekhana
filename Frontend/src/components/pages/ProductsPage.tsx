import { Box, Grid } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import CarNavBar from "../molecules/MovieNavBar";
import MovieCard from "../molecules/MovieCard";

import "./products.css";
import MovieNavBar from "../molecules/MovieNavBar";

export default function Products() {
  return (
    <div>
      
      <MovieNavBar></MovieNavBar>                                                                         

      <MovieCard></MovieCard>

    </div>
  );
  }