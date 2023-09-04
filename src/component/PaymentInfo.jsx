import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";

export default function PaymentInfo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <div>
        <Typography variant="h6" gutterBottom>
          Payment Information
        </Typography>

        <Grid container spacing={3} width={450}>
          <Grid item xs={12}>
            <FormControl required>
              <FormLabel id="tuition">
                Did you pay your first year tuition?
              </FormLabel>
              <RadioGroup
                aria-labelledby="tuition"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="fee"
              name="fee"
              label="How much tuition fee did you pay?"
              fullWidth
              autoComplete="fee"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl required>
              <FormLabel id="gic">Did you do a GIC?</FormLabel>
              <RadioGroup
                aria-labelledby="gic"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="gic_fee"
              name="gic_fee"
              label="How much did you pay towards GIC?"
              fullWidth
              autoComplete="gic_fee"
              variant="standard"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
