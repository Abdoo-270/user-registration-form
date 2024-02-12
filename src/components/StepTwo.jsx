import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { countries } from "../data/countries";
const StepTwo = () => {
  console.log(countries);
  return (
    <div className="flex justify-center">
      <div className="m-6 w-80">
        <FormInput
          type="text"
          label="full name"
          name="fullName"
          placeHolder="John Doe Michel"
        />
        <FormInput
          type="text"
          label="address line 1"
          name="address1"
          placeHolder="Lorem ipsum road. 123456"
        />
        <FormSelect label="country" options={countries} defaultValue="Turkey" />
      </div>
      <div className="m-6 w-80">
        <FormInput
          type="number"
          label="phone number"
          name="phone"
          placeHolder="+90 555 555 55 55"
        />
        <FormInput
          type="text"
          label="address line 2 (optional)"
          name="address2"
          placeHolder="lorem ipsum"
        />
        <FormInput
          type="text"
          label="city"
          name="city"
          placeHolder="Istanbul"
        />
      </div>
    </div>
  );
};

export default StepTwo;
