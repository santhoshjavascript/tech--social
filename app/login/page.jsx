"use client";

import { useState } from "react";
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signup/signup";

import "../../styles/custom.css";

export default function LoginPage() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className="font-montserrat flex min-h-screen items-center justify-center bg-black p-4 sm:p-5">
      <div
        className={`relative min-h-[600px] w-full max-w-[768px] overflow-hidden rounded-[10px] bg-[#1c2526] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] md:min-h-[700px] ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
      >
        <SignUp isRightPanelActive={isRightPanelActive} />
        <SignIn
          isRightPanelActive={isRightPanelActive}
          setIsRightPanelActive={setIsRightPanelActive}
        />
        <div
          className={`absolute top-0 left-1/2 z-[100] hidden h-full w-1/2 overflow-hidden transition-transform duration-600 ease-in-out md:block ${
            isRightPanelActive ? "-translate-x-full" : ""
          }`}
        >
          <div
            className={`relative -left-full h-full w-[200%] bg-gradient-to-r from-[#ff4b2b] to-[#ffb347] transition-transform duration-600 ease-in-out ${
              isRightPanelActive ? "translate-x-1/2" : ""
            }`}
          >
            <div
              className={`absolute top-0 flex h-full w-1/2 flex-col items-center justify-center px-8 text-center transition-transform duration-600 ease-in-out ${
                isRightPanelActive ? "translate-x-0" : "-translate-x-[15%]"
              }`}
            >
              <h1 className="mb-4 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-[2rem] lg:text-[2.5rem]">
                Welcome Back!
              </h1>
              <p className="mb-4 text-sm leading-5 font-light tracking-wide text-white sm:mb-6">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setIsRightPanelActive(false)}
                className="rounded-2xl border border-white bg-transparent px-8 py-3 text-xs font-bold tracking-wider text-white uppercase transition-transform duration-80 hover:scale-95 focus:outline-none sm:px-12"
              >
                Sign In
              </button>
            </div>
            <div
              className={`absolute top-0 right-0 flex h-full w-1/2 flex-col items-center justify-center px-8 text-center transition-transform duration-600 ease-in-out ${
                isRightPanelActive ? "translate-x-[15%]" : "translate-x-0"
              }`}
            >
              <h1 className="mb-4 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-[2rem] lg:text-[2.5rem]">
                Hello, Friend!
              </h1>
              <p className="mb-4 text-sm leading-5 font-light tracking-wide text-white sm:mb-6">
                Enter your personal details and start journey with us
              </p>
              <button
                onClick={() => setIsRightPanelActive(true)}
                className="rounded-2xl border border-white bg-transparent px-8 py-3 text-xs font-bold tracking-wider text-white uppercase transition-transform duration-80 hover:scale-95 focus:outline-none sm:px-12"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
