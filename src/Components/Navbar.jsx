import { FC, Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import midPng from "../assets/Group 4.png";
import logo from "../assets/logo.png";
import { auth } from "../firebase";



const navigation = [
  { name: "Home", href: "/dashboard", current: true },
  { name: "Connections", href: "/connections", current: false },
  { name: "Contests", href: "/contests", current: false },
  { name: "Trends", href: "/trends", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [active, setActive] = useState("home");

  const linkClicked = (name) => {
    if (name === "connection") setActive("connection");
    else if (name === "contest") setActive("contest");
    else if (name === "trend") setActive("trend");
    else setActive("home");
  };

  const logout = async () => {
    await auth.signOut();
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  return (
    <Disclosure
      as="nav"
      className="shadow-lg  bg-navbar fixed z-20 top-0 right-0 left-0 text-white bg-gray-900	"
    >
      {({ open }) => (
        <>
          <div className="font-Sora max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <ImCross className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <GiHamburgerMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
     
                  <img className="block  mr-2 h-12 w-auto" src={midPng}></img>
                  <img className="block  ml-1 h-12 w-15" src={logo}></img>
                </div>
                <div className="hidden sm:flex items-center sm:ml-6">
                  <div className="flex space-x-4 justify-center items-center">
                    <Link
                      to="/dashboard"
                      onClick={() => linkClicked("home")}
                      className={classNames(
                        active === "home"
                          ? "bg-purple-900 text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-base font-medium"
                      )}
                    >
                      Home
                    </Link>
                    <Link
                      to="/connections"
                      onClick={() => linkClicked("connection")}
                      className={classNames(
                        active === "connection"
                          ? "bg-purple-900 text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-base font-medium"
                      )}
                    >
                      Connections
                    </Link>

                    <Link
                      to="/contests"
                      onClick={() => linkClicked("contest")}
                      className={classNames(
                        active === "contest"
                          ? "bg-purple-900 text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-base font-medium"
                      )}
                    >
                      Contests
                    </Link>
                    <Link
                      to="/trends"
                      onClick={() => linkClicked("trend")}
                      className={classNames(
                        active === "trend"
                          ? "bg-purple-900 text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-base font-medium"
                      )}
                    >
                      Trends
                    </Link>
                    <SearchBar />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white outline-none ring-2 ring-offset-2 ring-offset-gray-800 ring-white mr-2"
                >
                  <span className="sr-only">View notifications</span>
                  <FaBell className="h-4 w-4 text-white" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&usqp=CAU"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/settings"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to=""
                            onClick={logout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-purple-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
              <SearchBar />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
