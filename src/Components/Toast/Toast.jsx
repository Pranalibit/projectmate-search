import { FC, Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { useHistory } from "react-router";
import Checked from "../../assets/checked.gif";
import Warning from "../../assets/warning.gif";

// interface ToastTypeProps {
//   type: "Error" | "Success";
//   show: boolean;
//   message: string;
// }

const Toast = ({ show, message, type }) => {
  // const history = useHistory();
  const [open, setOpen] = useState(show);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  const handleClick = () => {
    setOpen(false);
    // history.push("/");
  };

  return (
    <Transition.Root show={open}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={() => {}}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    {type === "Error" ? (
                      <Dialog.Title
                        as="h3"
                        className="text-lg flex items-center leading-6 font-medium text-red-800"
                      >
                        <img src={Warning} alt="" className="w-10 h-10" />
                        Error
                      </Dialog.Title>
                    ) : (
                      <Dialog.Title
                        as="h3"
                        className="text-lg flex items-center leading-6 font-medium text-green-900"
                      >
                        <img src={Checked} alt="" className="w-10 h-10" />
                        Success
                      </Dialog.Title>
                    )}
                    <div className="mt-2">
                      <p className="text-sm font-semibold text-gray-500">
                        {message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-2 w-full inline-flex justify-center rounded-md border border-black shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleClick}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Toast;
