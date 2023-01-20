import React from "react";

export function FilledButton({ children, className, onClick, disabled }) {
  return (
    <button
      className={`${
        className
          ? className
          : "w-full max-w-[400px] rounded-[35px] border-[1px] border-solid border-black bg-black px-9 py-[14px] text-center font-sans text-base font-bold leading-6 text-secondary transition-all duration-200 hover:text-secondary sm:py-[18px] md:text-xl"
      } ${
        disabled ? "opacity-50 hover:bg-forth" : "opacity-100 hover:bg-forth"
      }`}
      disabled={disabled ? true : false}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function OutlinedButton({ children, className, onClick, disabled }) {
  return (
    <button
      className={`${
        className
          ? className
          : "flex w-full max-w-[400px] flex-nowrap items-center justify-center gap-4 rounded-[35px] border-[1px] border-solid border-black bg-secondary px-9 py-[14px] text-center font-sans text-base font-bold leading-6 text-black transition-all duration-200 hover:bg-primary hover:text-secondary sm:py-[18px] md:text-xl "
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
