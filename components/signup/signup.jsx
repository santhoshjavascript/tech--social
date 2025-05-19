import { useState } from "react";

export default function SignUp({ isRightPanelActive }) {
  const [showOtpForm, setShowOtpForm] = useState(false);

  return (
    <div
      className={`absolute top-0 left-0 h-full w-full transition-all duration-600 ease-in-out md:w-1/2 ${
        isRightPanelActive
          ? "z-[5] translate-x-0 opacity-100 md:translate-x-full md:opacity-100"
          : "z-[1] translate-x-0 opacity-0 md:translate-x-0 md:opacity-0"
      }`}
    >
      {!showOtpForm ? (
        <form className="flex h-full w-full flex-col items-center justify-center bg-[#1c2526] px-5 text-center sm:px-8 md:px-[40px]">
          <h1 className="mb-4 text-3xl leading-tight font-bold text-white sm:mb-6 sm:text-4xl md:text-[2.5rem]">
            Sign Up
          </h1>
          <input
            type="text"
            placeholder="Username"
            className="my-2 w-full rounded border border-[#ff4b2b] bg-[#2a3435] px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 placeholder:opacity-70 focus:ring-2 focus:ring-[#ff4b2b] focus:outline-none sm:py-3.5"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="my-2 w-full rounded border border-[#ff4b2b] bg-[#2a3435] px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 placeholder:opacity-70 focus:ring-2 focus:ring-[#ff4b2b] focus:outline-none sm:py-3.5"
          />
          <input
            type="email"
            placeholder="Email"
            className="my-2 w-full rounded border border-[#ff4b2b] bg-[#2a3435] px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 placeholder:opacity-70 focus:ring-2 focus:ring-[#ff4b2b] focus:outline-none sm:py-3.5"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="my-2 w-full rounded border border-[#ff4b2b] bg-[#2a3435] px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 placeholder:opacity-70 focus:ring-2 focus:ring-[#ff4b2b] focus:outline-none sm:py-3.5"
          />
          <input
            type="password"
            placeholder="Password"
            className="my-2 w-full rounded border border-[#ff4b2b] bg-[#2a3435] px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 placeholder:opacity-70 focus:ring-2 focus:ring-[#ff4b2b] focus:outline-none sm:py-3.5"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="my-2 w-full rounded border border-[#ff4b2b] bg-[#2a3435] px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 placeholder:opacity-70 focus:ring-2 focus:ring-[#ff4b2b] focus:outline-none sm:py-3.5"
          />
          <div className="my-4 flex w-full items-center gap-2 text-xs text-white">
            <input
              type="checkbox"
              id="terms"
              required
              className="h-5 w-5 rounded accent-[#ff4b2b]"
            />
            <label htmlFor="terms" className="flex flex-1 items-center gap-1">
              <span className="text-xs font-medium">I agree to the</span>
              <a
                href="#"
                className="text-xs font-medium text-white hover:underline"
              >
                Terms
              </a>
              <span className="text-xs font-medium">&</span>
              <a
                href="#"
                className="text-xs font-medium text-white hover:underline"
              >
                Privacy
              </a>
            </label>
          </div>
          <div className="flex w-full flex-col gap-3 pt-4">
            <button
              type="button"
              onClick={() => setShowOtpForm(true)}
              className="rounded-2xl border border-[#ff4b2b] bg-gradient-to-r from-[#ff4b2b] to-[#ffb347] px-8 py-3 text-xs font-bold tracking-wider text-white uppercase transition-transform duration-80 hover:scale-95 focus:outline-none sm:px-12 sm:py-3.5"
            >
              Request OTP
            </button>
          </div>
        </form>
      ) : (
        <form className="flex h-full w-full flex-col items-center justify-center bg-[#1c2526] px-5 text-center sm:px-8 md:px-[40px]">
          <h1 className="mb-4 text-3xl leading-tight font-bold text-white sm:mb-6 sm:text-4xl md:text-[2.5rem]">
            Verify OTP
          </h1>
          <p className="mb-6 text-sm leading-5 font-light tracking-wide text-white">
            Enter the OTP received on your email
          </p>
          <input
            type="text"
            placeholder="Enter OTP"
            className="my-2 w-full rounded border border-[#ff4b2b] bg-[#2a3435] px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 placeholder:opacity-70 focus:ring-2 focus:ring-[#ff4b2b] focus:outline-none sm:py-3.5"
          />
          <div className="flex w-full gap-3 pt-4">
            <button
              type="button"
              onClick={() => setShowOtpForm(false)}
              className="flex-1 rounded-2xl border border-[#ff4b2b] bg-gradient-to-r from-[#ff4b2b] to-[#ffb347] px-8 py-3 text-xs font-bold tracking-wider text-white uppercase transition-transform duration-80 hover:scale-95 focus:outline-none sm:px-12 sm:py-3.5"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 rounded-2xl border border-[#ff4b2b] bg-gradient-to-r from-[#ff4b2b] to-[#ffb347] px-8 py-3 text-xs font-bold tracking-wider text-white uppercase transition-transform duration-80 hover:scale-95 focus:outline-none sm:px-12 sm:py-3.5"
            >
              Verify
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
