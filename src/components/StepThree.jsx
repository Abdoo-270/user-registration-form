import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
const StepThree = () => {
  return (
    <div className="flex justify-center">
      <div className="m-6 w-80">
        <FormSelect
          label="prefered theme"
          options={["Dark", "Light", "Cubcake", "Darcula"]}
          defaultValue="Light"
        />
        <FormSelect
          label="gender "
          options={["Male", "Female"]}
          defaultValue=""
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
        />
        <FormInput
          type="number"
          label="age"
          name="age"
          placeHolder="Enter your age"
        />
        <FormSelect
          label="prefered contact"
          options={["Email", "Phone Number"]}
          defaultValue=""
        />
      </div>
    </div>
  );
};

export default StepThree;
