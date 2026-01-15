import React from "react";

export default function Button({
  children,
  variant = "primary",
  type = "button",
}) {
  const base = "w-full py-3 rounded-full font-medium my-4";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "text-[#0064e0] hover:bg-gray-300 border border-[#0064e0]",
    tertiary: "bg-green-600 text-white md:w-2/3 md:rounded-md md:mx-auto",
  };

  return (
    <button type={type} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
