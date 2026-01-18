import React from 'react'
import FacebookLogo from './FacebookLogo'

export default function FacebookBranding() {
  return (
    <div>
      <div className="md:hidden">
        <FacebookLogo />
      </div>
      <div className="hidden md:flex md:flex-col  font-bold max-w-lg ">
        <h1 className="text-6xl text-[#0866ff] ">facebook</h1>
        <p className="text-2xl ">
          Avec Facebook, partagez et restez en contact avec votre entourage.
        </p>
      </div>
    </div>
  );
}
