import React from "react";
import DownloadBanner from "../components/layout/DownloadBanner.jsx";
import FacebookBranding from "../components/branding/FacebookBranding.jsx";
import LoginForm from "../components/auth/LoginForm.jsx";
import Footer from "../components/layout/Footer.jsx";
import ForgotPasswordLink from "../components/auth/ForgotPasswordLink.jsx";
import CreateAccountButton from "../components/auth/CreateAccountButton.jsx";
import Divider from "../components/ui/Divider.jsx";

export default function LoginPage() {
  return (
    <main className="flex flex-col h-screen">
      <div className="md:hidden">
      <DownloadBanner />
      </div>
      <div className=" flex flex-1 md:bg-[#dee2e9]">
        <div className="flex items-center w-full flex-col md:flex-row">
          <div className="flex flex-1 md:justify-end items-center">
            <FacebookBranding />
          </div>
          <div className="flex-1 flex flex-col w-full">
            <div className="flex-1 flex md:flex-none md:ml-30 p-4">
              <div className="w-full md:max-w-[386px] md:shadow-lg md:p-4 md:bg-white md:rounded-md">
                <LoginForm />
                <ForgotPasswordLink />
                <Divider />
                <div className="hidden md:flex ">
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
