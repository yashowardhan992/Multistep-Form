import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
export const Section = ({ title, children, url }) => {
  return (
    <Card className="section mb-4">
      <CardContent className="title-row mb-4">
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Link className={`btn btn-secondary`} to={url}>
          Edit
        </Link>
      </CardContent>
      <div className="content">{children}</div>
    </Card>
  );
};

export const SectionRow = ({ label, value, children }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Typography
          sx={{ marginLeft: 1, paddingLeft: 1, marginBottom: 1 }}
          variant="body1"
        >
          {label}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          sx={{ marginRight: 1, paddingRight: 1, marginBottom: 1 }}
          variant="body1"
        >
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};
