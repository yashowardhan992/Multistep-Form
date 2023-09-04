import { useForm, Controller } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import { Button, Field, Form, Input } from "../Forms";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
export const PaymentDetails = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <FormControl>
        <Grid container spacing={3} width={450}>
          <Grid item xs={12}>
            <Controller
              name="tuition"
              control={control}
              defaultValue=""
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <FormControl required error={!!errors.tuition}>
                  <FormLabel id="tuition">
                    Did you pay your first year tuition?
                  </FormLabel>
                  <RadioGroup {...field} aria-labelledby="tuition">
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                  {errors.tuition && (
                    <FormHelperText>{errors.tuition.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="fee"
              name="fee"
              label="How much tuition fee did you pay?"
              {...register("fee", {
                required: "This field is required",
              })}
              error={!!errors.fee}
              helperText={errors.fee?.message}
              fullWidth
              autoComplete="fee"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="gic"
              control={control}
              defaultValue=""
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <FormControl required error={!!errors.gic}>
                  <FormLabel id="gic">Did you do a GIC?</FormLabel>
                  <RadioGroup {...field} aria-labelledby="gic">
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                  {errors.gic && (
                    <FormHelperText>{errors.gic.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="gic_fee"
              name="gic_fee"
              label="How much did you pay towards GIC?"
              {...register("gic_fee", {
                required: "This field is required",
              })}
              error={!!errors.gic_fee}
              helperText={errors.fee?.message}
              fullWidth
              autoComplete="gic_fee"
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
