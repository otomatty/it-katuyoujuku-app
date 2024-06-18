import React from "react";
import { useAuthStore } from "../../../store/authStore";
import SignInButton from "../../atoms/SignInButton/SignInButton";
import SignOutButton from "../../atoms/SignOutButton/SignOutButton";
import Snackbar from "../../atoms/Snackbar/Snackbar";
import { WelcomeMessage } from "./AuthControl.styles";

const AuthControl: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <Snackbar />
      {user ? (
        <>
          <WelcomeMessage>Welcome, {user.displayName}</WelcomeMessage>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default AuthControl;
