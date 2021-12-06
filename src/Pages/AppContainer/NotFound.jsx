import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bgImage">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="sm:text-8xl text-5xl font-bold text-red-800">404</h1>
            <h1 className="sm:text-6xl text-2xl font-medium py-8">
              oops! Page not found
            </h1>
            <p className="sm:text-2xl  pb-8 px-12 font-medium">
              The page you are looking for does not exist. It might have been
              moved or deleted.
            </p>
            <Link
              to="/dashboard"
              className=" text-xs sm:text-base bg-gradient-to-r bg-blue-800 hover:from-blue-600  text-white font-semibold sm:px-6 px-3 py-3 rounded-md mr-6"
            >
              Go Back Home
            </Link>
            <Link
              to="/notFound"
              className="text-xs sm:text-base bg-gradient-to-r bg-red-500 hover:from-red-400 hover:to-red-600 text-white font-semibold sm:px-6 px-3 py-3 rounded-md"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;