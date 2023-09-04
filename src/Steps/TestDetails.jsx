import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
export const TestDetails = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state });

  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/paymentDetails");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <FormControl>
        <Grid container spacing={3} width={450}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="score1"
              name="score1"
              label="English Scores - Listening"
              {...register("score1", {
                required: "This field is required",
              })}
              error={!!errors.score1}
              helperText={errors.score1?.message}
              fullWidth
              autoComplete="score1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="score2"
              name="score2"
              label="English Scores - Reading"
              {...register("score2", {
                required: "This field is required",
              })}
              error={!!errors.score2}
              helperText={errors.score2?.message}
              fullWidth
              autoComplete="full-name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="score3"
              name="score3"
              label="English Scores - Speaking"
              {...register("score3", {
                required: "This field is required",
              })}
              error={!!errors.score3}
              helperText={errors.score3?.message}
              fullWidth
              autoComplete="score3"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="score4"
              name="score4"
              label="English Scores - Writing"
              {...register("score4", {
                required: "This field is required",
              })}
              error={!!errors.score4}
              helperText={errors.score4?.message}
              fullWidth
              autoComplete="score4"
              variant="standard"
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
