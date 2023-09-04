import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { AppProvider } from "./state";
import AdditionalInfo from "./component/AdditionalInfo";
import Checkout from "./component/Checkout";
import Form from "./component/Form";
import PaymentInfo from "./component/PaymentInfo";
import PersonalInfo from "./component/PersonalInfo";
import TestInfo from "./component/TestInfo";
import { Stepper } from "./Steps/Stepper";
import { PersonalDetails } from "./Steps/PersonalDetails";
import { AdditionalDetails } from "./Steps/AdditionalDetails";
import { TestDetails } from "./Steps/TestDetails";
import { PaymentDetails } from "./Steps/PaymentDetails";
import { Confirm } from "./Steps/Confirm";
function App() {
  return (
    <AppProvider>
      <Router>
        <Stepper />
        <Routes>
          <Route path="/" element={<PersonalDetails />} />
          <Route path="/additionalDetails" element={<AdditionalDetails />} />
          <Route path="/testDetails" element={<TestDetails />} />
          <Route path="/paymentDetails" element={<PaymentDetails />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
