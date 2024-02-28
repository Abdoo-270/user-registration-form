const NavBtns = ({ step, nextStep, prevStep, submitForm }) => {
  return (
    <div className=" mx-60 flex justify-between items-center">
      <div className="text-lg font-semibold">
        Step
        <span className="bg-teal-400	 px-2 py-0.5 m-1 ">{step}</span>of 4
      </div>
      <div>
        {step !== 1 && (
          <button
            className="ml-2 btn btn-primary  bg-teal-400 font-semibold"
            onClick={prevStep}
          >
            Previous Step
          </button>
        )}
        {step !== 4 && (
          <button
            className="ml-2  btn btn-primary bg-teal-400 font-semibold"
            onClick={nextStep}
          >
            Next Step
          </button>
        )}
        {step === 4 && (
          <button className="ml-2  btn btn-primary bg-teal-400 font-semibold">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
export default NavBtns;
