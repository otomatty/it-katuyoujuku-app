import React from "react";
import { signInWithGoogle } from "../../../api/googleCalendarApi";
import { useNotificationStore } from "../../../store/notificationStore";
import Button from "../Button/Button";

const SignInButton: React.FC = () => {
  const setMessage = useNotificationStore((state) => state.setMessage);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      setMessage("User signed in successfully", "success");
    } catch (error) {
      console.error("Error signing in: ", error);
      setMessage("Error signing in", "error");
    }
  };

  return <Button onClick={handleSignIn}>Sign In with Google</Button>;
};

export default SignInButton;
