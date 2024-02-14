import FormInput from "./FormInput";
import { Field } from "redux-form";
const StepOne = () => {
  return (
    <div className="flex justify-center">
      <div className="m-6 w-80">
        <FormInput
          type="text"
          label="first name"
          name="firstName"
          placeHolder="John"
        />
        <FormInput
          type="email"
          label="email address"
          name="email"
          placeHolder="name@yourdomain.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          placeHolder="**********"
        />
      </div>
      <div className="m-6 w-80">
        <FormInput
          type="text"
          label="last name"
          name="lastName"
          placeHolder="Doe"
        />
        <FormInput
          type="text"
          label="user name"
          name="userName"
          placeHolder="JohnDoe123"
        />
        <FormInput
          type="password"
          label="re-Password"
          name="rePassword"
          placeHolder="**********"
        />
      </div>
    </div>
  );
};

export default StepOne;
