import { Field } from "redux-form";
const FormSelect = ({ label, options, defaultValue, component, name }) => {
  return (
    <>
      <label className="form-control max-w-xs mb-2">
        <div className="label">
          <span className="label-text capitalize font-semibold">{label}</span>
        </div>
        <Field
          name={name}
          component={component}
          className="select select-bordered w-full max-w-xs rounded-none"
        >
          <option disabled selected>
            {defaultValue}
          </option>
          {options.map((item) => {
            return <option>{item}</option>;
          })}
        </Field>
      </label>
    </>
  );
};

export default FormSelect;
