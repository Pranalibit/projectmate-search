import { FC, InputHTMLAttributes } from "react";

interface InputFieldProp extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
  error?: string;
  touched?: boolean;
  type?: string;
  className: string;
  label?: boolean;
}

const InputField: FC<InputFieldProp> = ({
  id,
  placeholder,
  error,
  touched,
  type,
  label,
  className,
}) => {
  return (
    <div className="flex flex-col mt-5">
      {label && (
        <label className="text-base font-semibold w-max px-2 py-0.5 rounded mb-1 bg-gray-300" htmlFor={id}>
          {id}
        </label>
      )}
      <input
        id={id}
        className={className}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

InputField.defaultProps = {
  label: false,
};

export default InputField;
