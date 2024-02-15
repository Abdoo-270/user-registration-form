import { StepOne, StepTwo, StepThree, StepFour, NavBtns } from "./index";
import { Field, reduxForm } from "redux-form";
const ComplexForm = (props) => {
  const { handleSubmit, pristine, submitting, step, nextStep, prevStep } =
    props;

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}

      <NavBtns step={step} nextStep={nextStep} prevStep={prevStep} />
    </form>
  );
};
export default reduxForm({
  form: "complex", // a unique identifier for this form
})(ComplexForm);

/*!SECTION

<button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
*/
