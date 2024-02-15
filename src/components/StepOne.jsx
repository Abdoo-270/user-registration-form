import FormInput from "./FormInput";
import NavBtns from "./NavBtns";
const StepOne = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="m-6 w-80">
          <FormInput
            type="text"
            label="first name"
            name="firstName"
            placeHolder="John"
            component="input"
          />
          <FormInput
            type="email"
            label="email address"
            name="email"
            placeHolder="name@yourdomain.com"
            component="input"
          />
          <FormInput
            type="password"
            label="password"
            name="password"
            placeHolder="**********"
            component="input"
          />
        </div>
        <div className="m-6 w-80">
          <FormInput
            type="text"
            label="last name"
            name="lastName"
            placeHolder="Doe"
            component="input"
          />
          <FormInput
            type="text"
            label="user name"
            name="userName"
            placeHolder="JohnDoe123"
            component="input"
          />
          <FormInput
            type="password"
            label="re-Password"
            name="rePassword"
            placeHolder="**********"
            component="input"
          />
        </div>
      </div>
    </>
  );
};

export default StepOne;
