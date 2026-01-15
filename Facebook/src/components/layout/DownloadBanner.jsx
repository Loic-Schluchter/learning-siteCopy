import React from "react";
import downloadImage from "../../assets/download-logo.png";

export default function DownloadBanner() {
  return (
    <div className="flex flex-col items-center md:hidden">
      <div className="flex gap-4 not-even:justify-center items-center text-sm p-4 text-[#1562cf]">
        <img src={downloadImage} alt="" className="w-4 h-4" />
        <p>installez Facebook pour iOS et naviguez plus vite</p>
      </div>
      <div className="w-full h-px bg-black/20" />
      <p className="font-light m-2">Francais (France)</p>
    </div>
  );
}
