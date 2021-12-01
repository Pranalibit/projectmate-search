import React from "react";
const InputField = ({ id, placeholder, error, touched, type, label, className, }) => {
    return (React.createElement("div", { className: "flex flex-col mt-5" },
        label && (React.createElement("label", { className: "text-base font-semibold w-max px-2 py-0.5 rounded mb-1 bg-gray-300", htmlFor: id }, id)),
        React.createElement("input", { id: id, className: className, type: type, placeholder: placeholder })));
};
InputField.defaultProps = {
    label: false,
};
export default InputField;
