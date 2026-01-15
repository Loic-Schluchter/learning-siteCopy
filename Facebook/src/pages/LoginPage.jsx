import React from "react";
import DownloadBanner from "../components/layout/DownloadBanner.jsx";
import FacebookBranding from "../components/branding/FacebookBranding.jsx";
import LoginForm from "../components/auth/LoginForm.jsx";
import Footer from "../components/layout/Footer.jsx";
import ForgotPasswordLink from "../components/auth/ForgotPasswordLink.jsx";
import CreateAccountButton from "../components/auth/CreateAccountButton.jsx";

export default function LoginPage() {
  return (
    <main className="flex flex-col h-screen ">
      <DownloadBanner />
      <div className="flex items-center flex-1 md:bg-[#dee2e9]">
        <div className="flex h-1/4 items-center justify-center md:flex-1">
          <FacebookBranding />
        </div>
        <div className="flex-1 flex flex-col p-4">
          <div className="flex-1 flex  justify-center">
            <div className="w-full max-w-md md:shadow-lg md:p-6 md:bg-white md:rounded-lg md:h-1/2">
              <LoginForm />
              <ForgotPasswordLink />
              <div className="hidden md:flex md:mx-auto">
                <CreateAccountButton variant="tertiary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-full flex-1 md:justify-center md:flex md:flex-col items-center">
        <Footer />
      </div>
    </main>
  );
}
