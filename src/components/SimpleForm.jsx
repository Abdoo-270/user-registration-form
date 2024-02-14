import { StepOne, StepTwo, StepThree, StepFour } from "./index";
import { Field, reduxForm } from "redux-form";

const SimpleForm = ({ step }, props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <label>First Name</label>

        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/*
         {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
        {step === 4 && <StepFour />}
        
        */}

        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </form>
    </>
  );
};
export default reduxForm({
  form: "simple", // a unique identifier for this form
})(SimpleForm);
