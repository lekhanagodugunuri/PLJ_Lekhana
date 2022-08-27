import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";

import MovieNavBar from "../molecules/MovieNavBar";

function Login() {
  const cardStyle = {
    bgcolor: "#fff4fc",
    display: "block",
    height: "25vw",
    width: "25vw",
    backgroundColor: "#f8f4eb",
  };
  return (
    <div id="login">
      <MovieNavBar></MovieNavBar>
      <Card style={cardStyle}>
        <h2>LOGIN</h2>

        <Grid>
          <Grid>
            <TextField label="Username"></TextField>
          </Grid>
          <Grid>
            <TextField label="Password" type={"password"}></TextField>
          </Grid>
          <Grid>
            <Button> Login </Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Login;
