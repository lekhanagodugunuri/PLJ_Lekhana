import { Button } from "@mui/material";
import React, { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function UpdateButton1() {
  const navigate = useNavigate();

  const navigateToUpdate = () => {
    navigate("/update");
  }; 

  {
    return <Button variant="outlined" color="secondary" onClick={navigateToUpdate}>Update</Button>;
  }
}
export default UpdateButton1;
