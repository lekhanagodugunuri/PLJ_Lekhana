import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";

import MovieNavBar from "../molecules/MovieNavBar";

function Login() {
  return (
    <div>
      <MovieNavBar></MovieNavBar>
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
    </div>
  );
}

export default Login;
