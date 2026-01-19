import React from "react";
import LoginAccountButton from "./LoginAccountButton.jsx";

export default function LoginForm() {
  return (
    <form action="" className="">
      <div className="flex flex-col gap-3 font-semibold ">
        <input
          className="input-field"
          type="text"
          placeholder="Numéro mobile ou e-mail"
        />
        <input
          className="input-field"
          type="password"
          placeholder="Mot de passe"
        />
        <LoginAccountButton />
      </div>
    </form>
  );
}
