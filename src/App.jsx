import { useState } from "react";
//import SimpleForm from "./temp/SimpleForm";
import {
  Title,
  ProgressBar,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  NavBtns,
  SimpleForm,
} from "./components/index";
import showResults from "./components/showResults";
//!SECTION

function App() {
  const submitForm = (formData) => {
    // Access the form data here
    console.log("Form data:", formData);
    // You can send the form data to a server or perform other actions
  };

  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <section>
      {/* Title */}
      <Title title="user signup multi steps form" />

      {/* Progress Bar */}
      <ProgressBar step={step} />

      {/* Form */}
      <SimpleForm onSubmit={showResults()} />
      {/* Navigation Buttons */}
      <NavBtns step={step} nextStep={nextStep} prevStep={prevStep} />
    </section>
  );
}

export default App;
