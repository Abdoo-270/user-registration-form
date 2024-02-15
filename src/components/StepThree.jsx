import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
import { Field } from "redux-form";
const StepThree = () => {
  return (
    <div className="flex justify-center">
      <div className="m-6 w-80">
        <FormSelect
          label="prefered theme"
          options={["Dark", "Light", "Cubcake", "Darcula"]}
          defaultValue="Light"
          name="theme"
          component="select"
        />
        <FormSelect
          label="gender "
          options={["Male", "Female"]}
          defaultValue=""
          name="gender"
          component="select"
        />
        <div className="form-control">
          <label className="label cursor-pointer mt-10">
            <span className="label-text font-semibold ">
              Do you want to send you adds
            </span>
            <input
              type="checkbox"
              checked="checked"
              className="checkbox rounded-none"
            />
          </label>
        </div>
      </div>
      <div className="m-6 w-80">
        <FormSelect
          label="language "
          options={["Turkish", "English"]}
          defaultValue=""
          name="language"
          component="select"
        />
        <FormInput
          type="number"
          label="age"
          name="age"
          placeHolder="Enter your age"
          component="input"
        />
        <FormSelect
          label="prefered contact"
          options={["Email", "Phone Number"]}
          defaultValue=""
          name="contact"
          component="select"
        />
      </div>
    </div>
  );
};

export default StepThree;
