const FormInput = ({ label, name, type, placeHolder, defaultValue }) => {
  return (
    <>
      <label className="form-control max-w-xs mb-2">
        <div className="label">
          <span className="label-text capitalize font-semibold">{label}</span>
        </div>
        <input
          type={type}
          name={name}
          placeholder={placeHolder}
          defaultValue={defaultValue}
          className="input input-bordered w-full max-w-xs rounded-none	"
        />
      </label>
    </>
  );
};

export default FormInput;
