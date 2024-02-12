import { StepOne, StepTwo, StepThree, StepFour } from "./components/index";
import { useState } from "react";
function App() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <section>
      <h1 className=" capitalize mt-6 mb-5 text-3xl text- text-center font-bold	">
        user signup multi steps form
      </h1>
      <nav className="m-auto w-3/4 flex justify-between m-2  border-2 border-solid">
        {/*!SECTION
<ul className="m-1 flex bg-red-400 p-4 w-full">
          <span className="bg-red-800 w-9 h-full text-center  text-white font-bold text-3xl">
            1
          </span>
          <div className="pl-3 text-white">
            <p className="font-bold uppercase">account</p>
            <p className="text-xs">Lorem Ipsum is simply</p>
          </div>
        </ul>
        */}
        <ul className="m-1 flex p-4 w-full bg-gray-300">
          <span className="bg-red-800 text-white w-9 h-full text-center font-bold text-3xl">
            1
          </span>
          <div className="pl-3 ">
            <p className=" font-bold uppercase text-red-600">account</p>
            <p className="text-xs text-red-700">Lorem Ipsum is simply</p>
          </div>
        </ul>
        <ul className="m-1 flex p-4 w-full bg-gray-300">
          <span className="bg-gray-200 w-9 h-full text-center font-bold text-3xl">
            2
          </span>
          <div className="pl-3 ">
            <p className="font-bold uppercase">personal info</p>
            <p className="text-xs">Lorem Ipsum is simply</p>
          </div>
        </ul>
        <ul className="m-1 flex p-4 w-full bg-gray-300">
          <span className="bg-gray-200 w-9 h-full text-center font-bold text-3xl">
            3
          </span>
          <div className="pl-3 ">
            <p className="font-bold uppercase">add-ons</p>
            <p className="text-xs">Lorem Ipsum is simply</p>
          </div>
        </ul>
        <ul className="m-1 flex p-4 w-full bg-gray-300">
          <span className="bg-gray-200 w-9 h-full text-center font-bold text-3xl">
            4
          </span>
          <div className="pl-3 ">
            <p className="font-bold uppercase">summary</p>
            <p className="text-xs">Lorem Ipsum is simply</p>
          </div>
        </ul>
      </nav>

      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}

      {/* Navigation Buttons */}
      <div className=" mx-60 flex justify-between items-center">
        <div>step {step} of 4</div>
        <div>
          {step !== 1 && (
            <button className="ml-2 btn btn-primary" onClick={prevStep}>
              Previous Step
            </button>
          )}
          {step !== 4 && (
            <button className="ml-2  btn btn-primary" onClick={nextStep}>
              Next Step
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
