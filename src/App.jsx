import { useState } from "react";

import {
  Title,
  ProgressBar,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  NavBtns,
} from "./components/index";

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

      {/* Steps */}
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}

      {/* Navigation Buttons */}
      <NavBtns step={step} nextStep={nextStep} prevStep={prevStep} />
    </section>
  );
}

export default App;
