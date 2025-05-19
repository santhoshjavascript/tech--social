import { useState } from "react";

export default function SignIn({ isRightPanelActive, setIsRightPanelActive }) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div
      className={`absolute top-0 left-0 h-full w-full transition-transform duration-600 ease-in-out md:w-1/2 ${
        isRightPanelActive
          ? "z-[1] translate-x-0 opacity-0 md:translate-x-full"
          : "z-[2] translate-x-0 opacity-100 md:translate-x-0"
      }`}
    >
      {!showForgotPassword ? (
        <form className="flex h-full w-full flex-col items-center justify-center bg-[#1c2526] px-5 text-center sm:px-8 md:px-[40px]">
          <h1 className="mb-4 text-3xl leading-tight font-bold text-white sm:mb-6 sm:text-4xl md:text-[2.5rem]">
            Sign In
          </h1>
          <span className="mb-6 text-xs font-medium text-white">
            or use your account
          </span>
          <input
            type="email"
            placeholder="Email"
            className="my-2 w-full rounded border border-[#ff4b2b] bg-[#2a3435] px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 placeholder:opacity-70 focus:ring-2 focus:ring-[#ff4b2b] focus:outline-none sm:py-3.5"
          />
          <input
            type="password"
            placeholder="Password"
            className="my-2 w-full rounded border border-[#ff4b2b] bg-[#2a3435] px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 placeholder:opacity-70 focus:ring-2 focus:ring-[#ff4b2b] focus:outline-none sm:py-3.5"
          />
          <a
            href="#"
            onClick={() => setShowForgotPassword(true)}
            className="my-4 text-xs font-medium text-white hover:underline"
          >
            Forgot your password?
          </a>
          <div className="flex w-full flex-col gap-3 pt-4">
            <button
              type="submit"
              className="hidden rounded-2xl border border-[#ff4b2b] bg-gradient-to-r from-[#ff4b2b] to-[#ffb347] px-12 py-3.5 text-xs font-bold tracking-wider text-white uppercase transition-transform duration-80 hover:scale-95 focus:outline-none md:block"
            >
              Sign In
            </button>
            <div className="flex w-full gap-3 md:hidden">
              <button
                type="button"
                onClick={() => setIsRightPanelActive(true)}
                className="flex-1 rounded-2xl border border-[#ff4b2b] bg-gradient-to-r from-[#ff4b2b] to-[#ffb347] px-4 py-3 text-xs font-bold tracking-wider text-white uppercase transition-transform duration-80 hover:scale-95 focus:outline-none"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => setIsRightPanelActive(false)}
                className="flex-1 rounded-2xl border border-[#ff4b2b] bg-gradient-to-r from-[#ff4b2b] to-[#ffb347] px-4 py-3 text-xs font-bold tracking-wider text-white uppercase transition-transform duration-80 hover:scale-95 focus:outline-none"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form className="flex h-full w-full flex-col items-center justify-center bg-[#1c2526] px-5 text-center sm:px-8 md:px-[40px]">
          <h1 className="mb-4 text-3xl leading-tight font-bold text-white sm:mb-6 sm:text-4xl md:text-[2.5rem]">
            Forgot Password
          </h1>
          <p className="mb-6 text-sm leading-5 font-light tracking-wide text-white">
            Enter your email to receive a password reset link
          </p>
          <input
            type="email"
            placeholder="Email"
            className="my-2 w-full rounded border border-[#ff4b2b] bg-[#2a3435] px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 placeholder:opacity-70 focus:ring-2 focus:ring-[#ff4b2b] focus:outline-none sm:py-3.5"
          />
          <div className="flex w-full gap-3 pt-4">
            <button
              type="button"
              onClick={() => setShowForgotPassword(false)}
              className="flex-1 rounded-2xl border border-[#ff4b2b] bg-gradient-to-r from-[#ff4b2b] to-[#ffb347] px-8 py-3 text-xs font-bold tracking-wider text-white uppercase transition-transform duration-80 hover:scale-95 focus:outline-none sm:px-12 sm:py-3.5"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 rounded-2xl border border-[#ff4b2b] bg-gradient-to-r from-[#ff4b2b] to-[#ffb347] px-8 py-3 text-xs font-bold tracking-wider text-white uppercase transition-transform duration-80 hover:scale-95 focus:outline-none sm:px-12 sm:py-3.5"
            >
              Send Link
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
