import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { DevTool } from "@hookform/devtools";
import Button from "@mui/material/Button";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";

import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";

export default function PersonalInfo() {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/additionalInfo");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <form onSubmit={handleSubmit(saveData)} noValidate>
          <FormControl>
            <Grid container spacing={3} width={450}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  {...register("email", { required: "Email is required" })}
                  error={!!errors.email}
                  autoComplete="email"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  fullWidth
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  error={!!errors.fullName}
                  autoComplete="full-name"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="age"
                  name="age"
                  label="Age"
                  fullWidth
                  {...register("age", { required: "Age is required" })}
                  error={!!errors.age}
                  autoComplete="Age"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="edu">Highest Level of Education</InputLabel>
                  <Select
                    name="edu"
                    labelId="edu"
                    id="edu"
                    {...register("edu", {
                      required: "Education is required",
                    })}
                    variant="standard"
                  >
                    <MenuItem disabled value="">
                      <em>Select your Highest Level of Education</em>
                    </MenuItem>
                    <MenuItem>Grade 12</MenuItem>
                    <MenuItem>Diploma</MenuItem>
                    <MenuItem>Bachelors Degree</MenuItem>
                    <MenuItem>Masters Degree</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="insName"
                  name="insName"
                  label="Institute where you completed highest level of education"
                  fullWidth
                  {...register("insName", {
                    required: "Institute Name is required",
                  })}
                  error={!!errors.insName}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="stream"
                  name="stream"
                  label="What did you study"
                  fullWidth
                  variant="standard"
                  {...register("stream", { required: "Stream is required" })}
                  error={!!errors.stream}
                />
              </Grid>
            </Grid>

            <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
              Next
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
}
