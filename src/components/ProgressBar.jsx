import ProgressBarElement from "./ProgressBarElement";
const ProgressBar = ({ step }) => {
  return (
    <>
      <div className="m-auto w-3/4 flex justify-between   border-2 border-solid">
        <ProgressBarElement
          stepNumber="1"
          stepTitle="account"
          description="Lorem Ipsum is simply"
          step={step}
        />
        <ProgressBarElement
          stepNumber="2"
          stepTitle="personal info"
          description="Lorem Ipsum is simply"
          step={step}
        />
        <ProgressBarElement
          stepNumber="3"
          stepTitle="preferences"
          description="Lorem Ipsum is simply"
          step={step}
        />
        <ProgressBarElement
          stepNumber="4"
          stepTitle="overview"
          description="Lorem Ipsum is simply"
          step={step}
        />
      </div>
    </>
  );
};
export default ProgressBar;
