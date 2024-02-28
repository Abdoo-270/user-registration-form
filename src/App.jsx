import { useState } from "react";
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

  const submitForm = (values) => {
    alert(`Form submitted with values: ${JSON.stringify(values, null, 2)}`);
  };
  return (
    <section>
      <Title title="user signup multi steps form" />
      <ProgressBar step={step} />
      <ComplexForm
        onSubmit={showResults}
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        submitForm={submitForm}
      />
    </section>
  );
}

export default App;
{
  /* Navigation Buttons  
      <NavBtns step={step} nextStep={nextStep} prevStep={prevStep} />
      */
}
