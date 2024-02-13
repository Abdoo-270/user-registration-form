const ProgressBarElement = ({ stepNumber, stepTitle, description, step }) => {
  return (
    <>
      <ul
        className={`m-1 flex p-4 w-full bg-gray-300  ${
          step === Number(stepNumber) && "bg-teal-400"
        }`}
      >
        <span
          className={`bg-gray-200 w-9 h-full text-center font-bold text-3xl  ${
            step === Number(stepNumber) && "text-teal-800"
          }`}
        >
          {stepNumber}
        </span>
        <div className="pl-3 ">
          <p className={`font-bold uppercase `}>{stepTitle}</p>
          <p className="text-xs ">{description}</p>
        </div>
      </ul>
    </>
  );
};

export default ProgressBarElement;

{
  /*!SECTION
<ul className="m-1 flex p-4 w-full bg-gray-300">
          <span className="bg-gray-200 w-9 h-full text-center font-bold text-3xl">
            2
          </span>
          <div className="pl-3 ">
            <p className="font-bold uppercase">personal info</p>
            <p className="text-xs">Lorem Ipsum is simply</p>
          </div>
        </ul>
    */
}
