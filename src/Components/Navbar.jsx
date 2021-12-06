import { FC, Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import midPng from "../assets/Group 4.png";
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
      className="shadow-lg  bg-navbar fixed z-20 top-0 right-0 left-0"
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
                  <img
                    className="block lg:hidden h-12 w-auto"
                    src={midPng}
                    alt="Workflow"
                  />
                  <svg
                    className="hidden lg:block"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="235.798149705635"
                    height="220.3195962994113"
                    viewBox="0 0 3159.798149705635 580.3195962994113"
                  >
                    <rect fill="#040404" width="0" height="0" />
                    <g transform="scale(7.9899074852817495) translate(10, 10)">
                      <defs id="SvgjsDefs1066">
                        <linearGradient id="SvgjsLinearGradient1073">
                          <stop
                            id="SvgjsStop1074"
                            stop-color="#26275f"
                            offset="0"
                          ></stop>
                          <stop
                            id="SvgjsStop1075"
                            stop-color="#813e96"
                            offset="0.14"
                          ></stop>
                          <stop
                            id="SvgjsStop1076"
                            stop-color="#2e64af"
                            offset="0.29"
                          ></stop>
                          <stop
                            id="SvgjsStop1077"
                            stop-color="#3faa49"
                            offset="0.5"
                          ></stop>
                          <stop
                            id="SvgjsStop1078"
                            stop-color="#f2e64a"
                            offset="0.71"
                          ></stop>
                          <stop
                            id="SvgjsStop1079"
                            stop-color="#f2903b"
                            offset="0.86"
                          ></stop>
                          <stop
                            id="SvgjsStop1080"
                            stop-color="#ed4533"
                            offset="1"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <g
                        id="SvgjsG1067"
                        transform="matrix(0.6578947368421053,0,0,0.6578947368421053,2.1315789473684212,-6.578947368421053)"
                        fill="url(#SvgjsLinearGradient1073)"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M50,10L15,30v40l35,20l34.99-19.994L85,69.99V30L50,10z M50,17.699L74.89,31.92l-6.732,3.848L50,25.397L31.846,35.771  l-6.738-3.851L50,17.699z M64.795,41.546v13.059L53.369,48.08V35.02L64.795,41.546z M46.631,35.02v13.057l-11.423,6.527V41.546  L46.631,35.02z M46.631,80.377L21.735,66.152v-28.46l6.734,3.848v20.761L46.631,72.68V80.377z M38.571,60.377l11.426-6.529  l11.429,6.529L50,66.904L38.571,60.377z M78.265,66.152L53.369,80.377V72.68L71.53,62.305V41.54l6.734-3.848V66.152z"
                        ></path>
                      </g>
                      <g
                        id="SvgjsG1068"
                        transform="matrix(1.287694361406802,0,0,1.287694361406802,64.22298194090395,2.072204188266481)"
                        fill="#fcffff"
                      >
                        <path d="M11.42 5.720000000000001 l0 2.64 l-6.9 0 l0 3.3 l5.98 0 l0 2.44 l-5.98 0 l0 5.9 l-3.14 0 l0 -14.28 l10.04 0 z M16.38 5.720000000000001 l0 14.28 l-3.14 0 l0 -14.28 l3.14 0 z M22.259999999999998 5.720000000000001 l5.96 9.58 l0.04 0 l0 -9.58 l2.94 0 l0 14.28 l-3.14 0 l-5.94 -9.56 l-0.04 0 l0 9.56 l-2.94 0 l0 -14.28 l3.12 0 z M40.08 5.720000000000001 c2.0266 0 3.62 0.62666 4.78 1.88 s1.74 2.98 1.74 5.18 c0 2.28 -0.58334 4.0534 -1.75 5.32 s-2.73 1.9 -4.69 1.9 l-6.2 0 l0 -14.28 l6.12 0 z M39.879999999999995 17.36 c1.1333 0 2.0134 -0.37334 2.64 -1.12 s0.94 -1.8067 0.94 -3.18 c0 -1.5733 -0.33666 -2.75 -1.01 -3.53 s-1.71 -1.17 -3.11 -1.17 l-2.24 0 l0 9 l2.78 0 z M56.32 5.720000000000001 l3.34 5.64 l3.32 -5.64 l3.5 0 l-5.3 8.8 l0 5.48 l-3.14 0 l0 -5.56 l-5.26 -8.72 l3.54 0 z M74.08 5.380000000000001 c2.1066 0 3.8034 0.7 5.09 2.1 s1.93 3.2134 1.93 5.44 c0 2.1734 -0.64666 3.9534 -1.94 5.34 s-2.9866 2.08 -5.08 2.08 c-2.1066 0 -3.8034 -0.69334 -5.09 -2.08 s-1.93 -3.1666 -1.93 -5.34 c0 -2.2134 0.64666 -4.0234 1.94 -5.43 s2.9866 -2.11 5.08 -2.11 z M70.2 12.92 c0 1.44 0.33998 2.5966 1.02 3.47 s1.6333 1.31 2.86 1.31 c1.2 0 2.1466 -0.43 2.84 -1.29 s1.04 -2.0234 1.04 -3.49 c0 -1.5333 -0.34334 -2.7334 -1.03 -3.6 s-1.6433 -1.3 -2.87 -1.3 c-1.2 0 -2.1434 0.43334 -2.83 1.3 s-1.03 2.0666 -1.03 3.6 z M86.32 5.720000000000001 l-0.000019531 8.94 c0 1.0533 0.23666 1.8233 0.71 2.31 s1.2167 0.73 2.23 0.73 c1.0933 0 1.86 -0.24334 2.3 -0.73 s0.66 -1.2567 0.66 -2.31 l0 -8.94 l3.14 0 l0 8.94 c0 1.7867 -0.51 3.18 -1.53 4.18 s-2.5434 1.5 -4.57 1.5 c-2.0666 0 -3.5966 -0.5 -4.59 -1.5 s-1.49 -2.3934 -1.49 -4.18 l0 -8.94 l3.14 0 z M105.76 5.720000000000001 c1.2 0 2.1968 0.37 2.99 1.11 s1.19 1.6833 1.19 2.83 c0 1.7867 -0.75334 2.98 -2.26 3.58 l0 0.04 c0.50666 0.14666 0.90332 0.39 1.19 0.73 s0.50332 0.73666 0.64998 1.19 s0.24 1.18 0.28 2.18 c0.05334 1.3067 0.24 2.18 0.56 2.62 l-3.14 0 c-0.17334 -0.44 -0.30668 -1.2667 -0.40002 -2.48 c-0.10666 -1.28 -0.34 -2.1166 -0.7 -2.51 s-0.94666 -0.59 -1.76 -0.59 l-3.16 0 l0 5.58 l-3.14 0 l0 -14.28 l7.7 0 z M104.66000000000001 12.18 c0.66666 0 1.19 -0.15 1.57 -0.45 s0.57 -0.83 0.57 -1.59 c0 -0.72 -0.18666 -1.23 -0.56 -1.53 s-0.90668 -0.45 -1.6 -0.45 l-3.44 0 l0 4.02 l3.46 0 z M124.18 5.720000000000001 c2.0266 0 3.62 0.62666 4.78 1.88 s1.74 2.98 1.74 5.18 c0 2.28 -0.58334 4.0534 -1.75 5.32 s-2.73 1.9 -4.69 1.9 l-6.2 0 l0 -14.28 l6.12 0 z M123.98 17.36 c1.1333 0 2.0134 -0.37334 2.64 -1.12 s0.94 -1.8067 0.94 -3.18 c0 -1.5733 -0.33666 -2.75 -1.01 -3.53 s-1.71 -1.17 -3.11 -1.17 l-2.24 0 l0 9 l2.78 0 z M143.56 5.720000000000001 l0 2.64 l-7.54 0 l0 3.06 l6.92 0 l0 2.44 l-6.92 0 l0 3.5 l7.7 0 l0 2.64 l-10.84 0 l0 -14.28 l10.68 0 z M147.54000000000002 5.720000000000001 l3.18 10.04 l0.04 0 l3.22 -10.04 l3.24 0 l-4.74 14.28 l-3.54 0 l-4.64 -14.28 l3.24 0 z M169.12 5.720000000000001 l0 2.64 l-7.54 0 l0 3.06 l6.92 0 l0 2.44 l-6.92 0 l0 3.5 l7.7 0 l0 2.64 l-10.84 0 l0 -14.28 l10.68 0 z M174.54000000000002 5.720000000000001 l0 11.64 l6.96 0 l0 2.64 l-10.1 0 l0 -14.28 l3.14 0 z M189.66 5.380000000000001 c2.1066 0 3.8034 0.7 5.09 2.1 s1.93 3.2134 1.93 5.44 c0 2.1734 -0.64666 3.9534 -1.94 5.34 s-2.9866 2.08 -5.08 2.08 c-2.1066 0 -3.8034 -0.69334 -5.09 -2.08 s-1.93 -3.1666 -1.93 -5.34 c0 -2.2134 0.64666 -4.0234 1.94 -5.43 s2.9866 -2.11 5.08 -2.11 z M185.78 12.92 c0 1.44 0.33998 2.5966 1.02 3.47 s1.6333 1.31 2.86 1.31 c1.2 0 2.1466 -0.43 2.84 -1.29 s1.04 -2.0234 1.04 -3.49 c0 -1.5333 -0.34334 -2.7334 -1.03 -3.6 s-1.6433 -1.3 -2.87 -1.3 c-1.2 0 -2.1434 0.43334 -2.83 1.3 s-1.03 2.0666 -1.03 3.6 z M205.28 5.720000000000001 c1.52 0 2.72 0.41334 3.6 1.24 s1.32 1.94 1.32 3.34 c0 1.4133 -0.44 2.53 -1.32 3.35 s-2.0734 1.23 -3.58 1.23 l-3.34 0 l0 5.12 l-3.14 0 l0 -14.28 l6.46 0 z M204.46 12.440000000000001 c0.90666 0 1.5833 -0.16666 2.03 -0.5 s0.67 -0.88 0.67 -1.64 c0 -0.73334 -0.21666 -1.2733 -0.65 -1.62 s-1.11 -0.52 -2.03 -0.52 l-2.52 0 l0 4.28 l2.5 0 z M222.84 5.720000000000001 l0 2.64 l-7.54 0 l0 3.06 l6.92 0 l0 2.44 l-6.92 0 l0 3.5 l7.7 0 l0 2.64 l-10.84 0 l0 -14.28 l10.68 0 z M232.82000000000002 5.720000000000001 c1.2 0 2.1968 0.37 2.99 1.11 s1.19 1.6833 1.19 2.83 c0 1.7867 -0.75334 2.98 -2.26 3.58 l0 0.04 c0.50666 0.14666 0.90332 0.39 1.19 0.73 s0.50332 0.73666 0.64998 1.19 s0.24 1.18 0.28 2.18 c0.05334 1.3067 0.24 2.18 0.56 2.62 l-3.14 0 c-0.17334 -0.44 -0.30668 -1.2667 -0.40002 -2.48 c-0.10666 -1.28 -0.34 -2.1166 -0.7 -2.51 s-0.94666 -0.59 -1.76 -0.59 l-3.16 0 l0 5.58 l-3.14 0 l0 -14.28 l7.7 0 z M231.72 12.18 c0.66666 0 1.19 -0.15 1.57 -0.45 s0.57 -0.83 0.57 -1.59 c0 -0.72 -0.18666 -1.23 -0.56 -1.53 s-0.90668 -0.45 -1.6 -0.45 l-3.44 0 l0 4.02 l3.46 0 z"></path>
                      </g>
                      <g
                        transform="matrix(0.4663023837409462,0,0,0.4663023837409462,65.44043711727583,31.295446085362386)"
                        fill="#fcffff"
                      >
                        <path d="M3.4 6 l0 14 l-2.2 0 l0 -14 l2.2 0 z M26.652 6 l2.2 0 l0 14 l-1.68 0 l-7.82 -9.98 l0 9.98 l-2.2 0 l0 -14 l1.7 0 l7.8 10 l0 -10 z M52.104 6 l2.2 0 l0 14 l-1.68 0 l-7.82 -9.98 l0 9.98 l-2.2 0 l0 -14 l1.7 0 l7.8 10 l0 -10 z M74.95599999999999 5.800000000000001 c3.76 0 7.2 2.96 7.2 7.2 s-3.44 7.2 -7.2 7.2 s-7.2 -2.96 -7.2 -7.2 s3.44 -7.2 7.2 -7.2 z M74.95599999999999 18.12 c2.58 0 4.92 -2.12 4.92 -5.12 s-2.34 -5.12 -4.92 -5.12 s-4.92 2.12 -4.92 5.12 s2.34 5.12 4.92 5.12 z M106.868 6 l2.34 0 l-6.24 14 l-1.92 0 l-6.24 -14 l2.34 0 l4.86 11.22 z M133.42 20 l-1.28 -2.96 l-7.16 0 l-1.28 2.96 l-2.34 0 l6.24 -14 l1.92 0 l6.24 14 l-2.34 0 z M125.77999999999997 15.219999999999999 l5.56 0 l-2.78 -6.44 z M157.95199999999997 6 l0 2.04 l-3.72 0 l0 11.96 l-2.2 0 l0 -11.96 l-3.72 0 l0 -2.04 l9.64 0 z M173.504 6 l0 14 l-2.2 0 l0 -14 l2.2 0 z M198.516 6 l2.34 0 l-6.24 14 l-1.92 0 l-6.24 -14 l2.34 0 l4.86 11.22 z M216.00799999999998 17.96 l6.34 0 l0 2.04 l-6.74 0 l-1.8 0 l0 -14 l2.2 0 l6.16 0 l0 2.04 l-6.16 0 l0 3.92 l4.74 0 l0 2 l-4.74 0 l0 4 z M257.67199999999997 6 c4.04 0 7.08 3.1 7.08 6.96 c0 3.94 -3.04 7.04 -7.08 7.04 l-4.52 0 l0 -14 l4.52 0 z M257.652 17.92 c3.06 0 4.86 -2.22 4.86 -4.96 c0 -2.66 -1.8 -4.88 -4.86 -4.88 l-2.3 0 l0 9.84 l2.3 0 z M280.304 17.96 l6.34 0 l0 2.04 l-6.74 0 l-1.8 0 l0 -14 l2.2 0 l6.16 0 l0 2.04 l-6.16 0 l0 3.92 l4.74 0 l0 2 l-4.74 0 l0 4 z M311.356 6 l2.34 0 l-6.24 14 l-1.92 0 l-6.24 -14 l2.34 0 l4.86 11.22 z M328.848 17.96 l6.34 0 l0 2.04 l-6.74 0 l-1.8 0 l0 -14 l2.2 0 l6.16 0 l0 2.04 l-6.16 0 l0 3.92 l4.74 0 l0 2 l-4.74 0 l0 4 z M350.84000000000003 17.96 l5.94 0 l0 2.04 l-8.14 0 l0 -14 l2.2 0 l0 11.96 z M377.0320000000001 5.800000000000001 c3.76 0 7.2 2.96 7.2 7.2 s-3.44 7.2 -7.2 7.2 s-7.2 -2.96 -7.2 -7.2 s3.44 -7.2 7.2 -7.2 z M377.0320000000001 18.12 c2.58 0 4.92 -2.12 4.92 -5.12 s-2.34 -5.12 -4.92 -5.12 s-4.92 2.12 -4.92 5.12 s2.34 5.12 4.92 5.12 z M402.38400000000007 6 c3.14 0 5.06 1.92 5.06 4.62 s-1.92 4.5 -5.06 4.5 l-2.5 0 l0 4.88 l-2.2 0 l0 -14 l4.7 0 z M402.2840000000001 13.2 c1.78 0 2.96 -0.84 2.96 -2.58 s-1.18 -2.58 -2.96 -2.58 l-2.4 0 l0 5.16 l2.4 0 z M422.8960000000001 17.96 l6.34 0 l0 2.04 l-6.74 0 l-1.8 0 l0 -14 l2.2 0 l6.16 0 l0 2.04 l-6.16 0 l0 3.92 l4.74 0 l0 2 l-4.74 0 l0 4 z M453.2880000000001 20 l-2.36 0 l-3.3 -4.88 l-0.24 0 l-2.5 0 l0 4.88 l-2.2 0 l0 -14 l4.7 0 c3.14 0 5.06 1.92 5.06 4.62 c0 1.96 -1.02 3.46 -2.78 4.12 z M444.8880000000001 8.04 l0 5.16 l2.4 0 c1.78 0 2.96 -0.84 2.96 -2.58 s-1.18 -2.58 -2.96 -2.58 l-2.4 0 z M488.4920000000001 6 c3.14 0 5.06 1.92 5.06 4.62 s-1.92 4.5 -5.06 4.5 l-2.5 0 l0 4.88 l-2.2 0 l0 -14 l4.7 0 z M488.3920000000001 13.2 c1.78 0 2.96 -0.84 2.96 -2.58 s-1.18 -2.58 -2.96 -2.58 l-2.4 0 l0 5.16 l2.4 0 z M509.0040000000001 17.96 l5.94 0 l0 2.04 l-8.14 0 l0 -14 l2.2 0 l0 11.96 z M539.5560000000002 20 l-1.28 -2.96 l-7.16 0 l-1.28 2.96 l-2.34 0 l6.24 -14 l1.92 0 l6.24 14 l-2.34 0 z M531.9160000000002 15.219999999999999 l5.56 0 l-2.78 -6.44 z M564.0880000000002 6 l0 2.04 l-3.72 0 l0 11.96 l-2.2 0 l0 -11.96 l-3.72 0 l0 -2.04 l9.64 0 z M585.9600000000002 8 l-6.26 0 l0 4.02 l5.16 0 l0 1.88 l-5.16 0 l0 6.1 l-2.26 0 l0 -14 l8.52 0 l0 2 z M605.7120000000002 5.800000000000001 c3.76 0 7.2 2.96 7.2 7.2 s-3.44 7.2 -7.2 7.2 s-7.2 -2.96 -7.2 -7.2 s3.44 -7.2 7.2 -7.2 z M605.7120000000002 18.12 c2.58 0 4.92 -2.12 4.92 -5.12 s-2.34 -5.12 -4.92 -5.12 s-4.92 2.12 -4.92 5.12 s2.34 5.12 4.92 5.12 z M636.9640000000002 20 l-2.36 0 l-3.3 -4.88 l-0.24 0 l-2.5 0 l0 4.88 l-2.2 0 l0 -14 l4.7 0 c3.14 0 5.06 1.92 5.06 4.62 c0 1.96 -1.02 3.46 -2.78 4.12 z M628.5640000000002 8.04 l0 5.16 l2.4 0 c1.78 0 2.96 -0.84 2.96 -2.58 s-1.18 -2.58 -2.96 -2.58 l-2.4 0 z M664.8760000000002 6 l0 14 l-2.26 0 l0 -9.06 l-4.2 9.06 l-1.86 0 l-4.18 -9.04 l0 9.04 l-2.26 0 l0 -14 l2.18 0 l5.2 11.02 l5.2 -11.02 l2.18 0 z"></path>
                      </g>
                    </g>
                  </svg>
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
