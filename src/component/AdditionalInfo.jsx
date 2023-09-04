import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { FormControl } from "@mui/material";

export default function AdditionalInfo() {
  const form = useForm({
    defaultValues: {
      work_exp: "",
      admission: "",
      country: "",
      goals: "",
    },
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div>
        <Typography variant="h6" gutterBottom>
          Additional Information
        </Typography>
        <Typography variant="h6" gutterBottom>
          Write None if no work experience. Provide the following details if
          yes: Job Title, Company Name ,Job duties. Sample Answer: I worked as a
          Sales Manager at Company INC from Jan 2022 till Feb 2023. In this
          role, I managed sales operations, reaching out to leads, lead the
          outreach program, ensured meeting monthly targets.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                  fullWidth
                  variant="standard"
                />
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </div>
    </div>
  );
}
