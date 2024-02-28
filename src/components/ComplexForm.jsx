import { StepOne, StepTwo, StepThree, StepFour, NavBtns } from "./index";
import { Field, reduxForm } from "redux-form";
const ComplexForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    step,
    nextStep,
    prevStep,
    submitForm,
  } = props;
  const handleFormSubmit = (data) => {
    if (step === 4) {
      submitForm(data); // Call the submitForm function only on the final step
    } else {
      null; // Proceed to the next step without submitting the form
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}

      <NavBtns
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        submitForm={submitForm}
      />
    </form>
  );
};
export default reduxForm({
  form: "complex",
})(ComplexForm);

/*!SECTION

<button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
*/
