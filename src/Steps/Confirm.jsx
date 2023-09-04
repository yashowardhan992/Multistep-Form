import axios from "axios";
import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Button, Form, Section, SectionRow } from "../Forms";
import Typography from "@mui/material/Typography";

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = async (data) => {
    try {
      // Send the form data to your backend server
      await axios.post("https://multistep-form-gamma-five.vercel.app/send-email", data);
      console.log("Email sent successfully");
      // Handle success or redirect to a success page
    } catch (error) {
      console.error("Email could not be sent:", error);
      // Handle the error or display an error message to the user
    }
    console.info(data);
    // Submit data to the server
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <Typography variant="h4" gutterBottom>
        Confirm
      </Typography>
      <Section title="Personal Details" url="/">
        <SectionRow label="Email" value={state.email} />
        <SectionRow label="Full Name" value={state.fullName} />
        <SectionRow label="Age" value={state.age} />
        <SectionRow label="Highest Education" value={state.edu} />
        <SectionRow label="Institute Name" value={state.insName} />
      </Section>

      <Section title="Additional Details" url="/additionalDetails">
        <SectionRow label="Work Experience" value={state.work_exp} />
        <SectionRow label="Enrolled College" value={state.admission} />
        <SectionRow label="Country" value={state.country} />
        <SectionRow label="Future Goals" value={state.goals} />
      </Section>

      <Section title="Test Details" url="/testDetails">
        <SectionRow label="English Scores - Listening" value={state.score1} />
        <SectionRow label="English Scores - Reading" value={state.score2} />
        <SectionRow label="English Scores - Speaking" value={state.score3} />
        <SectionRow label="English Scores - Writing" value={state.score4} />
      </Section>

      <Section title="Payment Details" url="/paymentDetails">
        <SectionRow
          label="Did you pay your first year tuition?"
          value={state.tuition}
        />
        <SectionRow
          label="How much tuition fee did you pay?"
          value={state.fee}
        />
        <SectionRow label="Did you do a GIC?" value={state.gic} />
        <SectionRow
          label="How much did you pay towards GIC?"
          value={state.gic_fee}
        />
      </Section>
      <div className="d-flex justify-content-start mt-4">
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};
