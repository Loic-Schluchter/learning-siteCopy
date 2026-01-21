import React from "react";
import DownloadBanner from "../components/layout/DownloadBanner.jsx";
import FacebookBranding from "../components/branding/FacebookBranding.jsx";
import LoginForm from "../components/auth/LoginForm.jsx";
import Footer from "../components/layout/Footer.jsx";
import ForgotPasswordLink from "../components/auth/ForgotPasswordLink.jsx";
import CreateAccountButton from "../components/auth/CreateAccountButton.jsx";

export default function LoginPage() {
  return (
    <main className="flex flex-col h-screen">
      <DownloadBanner />
      <div className=" flex flex-1 md:bg-[#dee2e9]">
        <div className="flex items-center flex-1 flex-col md:flex-row">
          <div className="flex flex-1 md:justify-end items-center">
            <FacebookBranding />
          </div>
          <div className="flex-1 flex flex-col w-full">
            <div className="flex-1 flex md:flex-none md:ml-30 p-4">
              <div className="w-full md:max-w-[386px] md:shadow-lg md:p-4 md:bg-white md:rounded-md">
                <LoginForm />
                <ForgotPasswordLink />
                <div class="h-px bg-gray-300 my-4"></div>

                <div className="hidden md:flex md:mx-auto">
                  <CreateAccountButton variant="tertiary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-full md:h-1/4 md:justify-center md:flex  md:items-center px-4 py-2">
        <Footer />
      </div>
    </main>
  );
}
