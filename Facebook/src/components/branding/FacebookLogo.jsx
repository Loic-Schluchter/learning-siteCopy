import React from "react";
import facebookLogo from "../../assets/facebook-logo.svg";

export default function FacebookLogo() {
  return (
    <div >
      <img src={facebookLogo} alt="Facebook Logo" className="h-16 w-16 object-contain" fetchPriority="high" decoding="async" />
    </div>
  );
}
