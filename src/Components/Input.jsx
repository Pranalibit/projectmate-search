import { FC, InputHTMLAttributes, useState } from "react";
import { FaEye } from "react-icons/fa";

// interface InputPropType extends InputHTMLAttributes<HTMLInputElement> {
//   id: string;
//   placeholder: string;
//   error?: string;
//   touched?: boolean;
//   type?: "Password" | " ";
// }

const Input = ({
  id,
  placeholder,
  error,
  touched,
  type,
  ...rest
}) => {
  const [showPass, setShowPass] = useState(false);
  const [typePass, setTypePass] = useState(type);

  return (
    <div className="flex flex-col space-y-2 mb-2 text-left ">
      <label
        htmlFor={id}
        className="sr-only text-gray-700 ml-1  font-bold text-xl"
      >
        {placeholder}
      </label>
      <div className=" flex flex-row justify-between py-2 border-b-2 font-Sora border-purple-700 text-sm  text-black placeholder-gray-600 focus:outline-none outline-none  ">
        <input
          type={typePass}
          id={id}
          {...rest}
          placeholder={placeholder}
          required
          className="focus:outline-none outline-none w-full "
        />
        {type === "Password" && setShowPass && (
          <FaEye
            onClick={() => {
              setShowPass(!showPass);
              typePass === "Password"
                ? setTypePass(" ")
                : setTypePass("Password");
            }}
            className="w-5 h-5"
          />
        )}
      </div>
      {<h2 className="text-xs h-2 text-red-600">{touched && error}</h2>}
    </div>
  );
};

export default Input;