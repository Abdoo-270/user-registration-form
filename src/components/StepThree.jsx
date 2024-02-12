const StepThree = () => {
  return (
    <div className="flex justify-center">
      <div className="m-6 w-80">
        <label className="form-control max-w-xs mb-2">
          <div className="label">
            <span className="label-text capitalize bold">3-step</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs rounded-none	"
          />
        </label>
        <label className="form-control w-full max-w-xs mb-2">
          <div className="label">
            <span className="label-text capitalize">email address</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs rounded-none	"
          />
        </label>
        <label className="form-control w-full max-w-xs mb-2">
          <div className="label">
            <span className="label-text capitalize"> password</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs rounded-none	"
          />
        </label>
      </div>
      <div className="m-6 w-80">
        <label className="form-control w-full max-w-xs mb-2">
          <div className="label">
            <span className="label-text capitalize"> password</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs rounded-none	"
          />
        </label>
        <label className="form-control w-full max-w-xs mb-2">
          <div className="label">
            <span className="label-text capitalize"> password</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs rounded-none	"
          />
        </label>
        <label className="form-control w-full max-w-xs mb-2">
          <div className="label">
            <span className="label-text capitalize"> password</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs rounded-none"
          />
        </label>
      </div>
    </div>
  );
};

export default StepThree;
