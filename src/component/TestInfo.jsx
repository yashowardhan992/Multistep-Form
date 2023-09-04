import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function TestInfo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
      }}
    >
      <div>
        <Typography variant="h6" gutterBottom>
          Test Details
        </Typography>

        <Grid container spacing={3} width={450}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="score1"
              name="score1"
              label="English Scores - Listening"
              fullWidth
              autoComplete="score1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="score2"
              name="score2"
              label="English Scores - Reading
              "
              fullWidth
              autoComplete="full-name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="score3"
              name="score3"
              label="English Scores - Speaking"
              fullWidth
              autoComplete="score3"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="score4"
              name="score4"
              label="English Scores - Writing"
              fullWidth
              autoComplete="score4"
              variant="standard"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
