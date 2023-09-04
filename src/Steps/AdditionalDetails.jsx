import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import { Button, Field, Form, Input } from "../Forms";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
export const AdditionalDetails = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/testDetails");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <FormControl>
        <Grid container spacing={3} width={450}>
          <Grid item xs={12}>
            <TextField
              id="work_exp"
              name="work_exp"
              label="Do you have any relevant work experience?"
              fullWidth
              {...register("work_exp", {
                required: "Work experience is required",
              })}
              error={!!errors.work_exp}
              helperText={errors.work_exp?.message}
              autoComplete="work_exp"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="admission"
              name="admission"
              label="What institute did you get admitted to in Canada?"
              {...register("admission", {
                required: "College is required",
              })}
              error={!!errors.admission}
              helperText={errors.admission?.message}
              fullWidth
              autoComplete="admission"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="country"
              name="country"
              label="Which country are you applying from?"
              {...register("country", { required: "Country is required" })}
              error={!!errors.country}
              helperText={errors.country?.message}
              fullWidth
              autoComplete="country"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="goals"
              name="goals"
              label="What are your future goals?"
              {...register("goals", { required: "This field is required" })}
              error={!!errors.goals}
              helperText={errors.goals?.message}
              fullWidth
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
