const FormSelect = ({ label, options, defaultValue }) => {
  return (
    <>
      <label className="form-control max-w-xs mb-2">
        <div className="label">
          <span className="label-text capitalize font-semibold">{label}</span>
        </div>
        <select className="select select-bordered w-full max-w-xs rounded-none">
          <option disabled selected>
            {defaultValue}
          </option>
          {options.map((item) => {
            return <option>{item}</option>;
          })}
        </select>
      </label>
    </>
  );
};

export default FormSelect;
