import React from "react";
import MetaLogoImage from "../../assets/meta-logo.svg";

export default function MetaLogo() {
  return <img className="w-26 mx-auto h-auto object-contain" src={MetaLogoImage} alt="Meta" fetchPriority="high" decoding="async" />;
}
