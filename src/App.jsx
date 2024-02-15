import { useState } from "react";
//import SimpleForm from "./temp/SimpleForm";
import { Title, ProgressBar, ComplexForm, NavBtns } from "./components/index";
import showResults from "./temp/showResults";

function App() {
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
      <ComplexForm
        onSubmit={showResults}
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
      />
      {/* Navigation Buttons  
      <NavBtns step={step} nextStep={nextStep} prevStep={prevStep} />
      */}
    </section>
  );
}

export default App;
