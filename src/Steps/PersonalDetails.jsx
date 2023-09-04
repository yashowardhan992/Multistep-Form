import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import { Button, Field, Form, Input } from "../Forms";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";

export const PersonalDetails = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/additionalDetails");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
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
              helperText={errors.email?.message}
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
              helperText={errors.fullName?.message}
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
              helperText={errors.age?.message}
              autoComplete="Age"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="edu"
              name="edu"
              label="Highest Level of Education"
              fullWidth
              {...register("edu", {
                required: "Education is required",
              })}
              error={!!errors.edu}
              helperText={errors.edu?.message}
              variant="standard"
            />
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
              helperText={errors.insName?.message}
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
              helperText={errors.stream?.message}
            />
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
          Next
        </Button>
      </FormControl>
    </Form>
  );
};
