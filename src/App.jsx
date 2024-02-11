import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

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
      <h1 className="text-red-700 capitalize mt-6 mb-5 text-3xl text- text-center font-bold	">
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
            <p className=" font-bold uppercase">your info</p>
            <p className="text-xs">Lorem Ipsum is simply</p>
          </div>
        </ul>
        <ul className="m-1 flex p-4 w-full bg-gray-300">
          <span className="bg-gray-200 w-9 h-full text-center font-bold text-3xl">
            2
          </span>
          <div className="pl-3 ">
            <p className="font-bold uppercase">select plan</p>
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

      <form>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
      </form>
      <hr></hr>

      {/* Navigation Buttons */}
      {step !== 1 && <button onClick={prevStep}>Previous Step</button>}
      {step !== 3 && <button onClick={nextStep}>Next Step</button>}
    </section>
  );
}

export default App;
