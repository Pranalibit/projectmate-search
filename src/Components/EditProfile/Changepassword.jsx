import InputField from "../helper/InputField";

const Password = () => {
  return (
    <div className="bg-transparent">
      <h1 className="font-medium text-2xl border-b-2">Change Password</h1>
      <div className="flex flex-col">
        <form action="">
          <InputField
            label={true}
            id="Old Password"
            placeholder=""
            type="text"
            className="focus:shadow-3xl px-1 w-96 rounded border-2 outline-none"
          />
          <InputField
            label={true}
            id="New Password"
            placeholder=""
            type="text"
            className="focus:shadow-3xl px-1 w-96 rounded border-2 outline-none"
          />
          <InputField
            label={true}
            id="Confirm Password"
            placeholder=""
            type="text"
            className="focus:shadow-3xl px-1 w-96 rounded border-2 outline-none"
          />
        </form>
        <div className="text-sm font-light">
          Make Sure the password is 8 characters long and it contains number and
          special characters.{" "}
          <a className="text-blue-600" href=" ">
            Learn more
          </a>
        </div>
        <div className="flex flex-row mt-3 items-center space-x-4">
          <button className="px-3 py-1.5 rounded-md bg-gray-200 border-2 border-gray-300">
            Update Password
          </button>
          <a className="text-blue-600" href=" ">
            Forgot Password?
          </a>
        </div>
        <div className="mt-10">
          <h1 className="font-medium text-2xl border-b-2">
            Two Factor Authentication
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Password;
