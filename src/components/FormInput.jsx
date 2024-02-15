import { Field } from "redux-form";
const FormInput = ({ label, name, type, placeHolder, component }) => {
  return (
    <>
      <label className="form-control max-w-xs mb-2">
        <div className="label">
          <span className="label-text capitalize font-semibold">{label}</span>
        </div>

        <Field
          component={component}
          type={type}
          name={name}
          placeholder={placeHolder}
          className="input input-bordered w-full max-w-xs rounded-none	"
        />
      </label>
    </>
  );
};

export default FormInput;
