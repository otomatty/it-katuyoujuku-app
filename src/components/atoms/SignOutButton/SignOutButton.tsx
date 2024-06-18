import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebaseApp";
import { useNotificationStore } from "../../../store/notificationStore";
import Button from "../Button/Button";

const SignOutButton: React.FC = () => {
  const setMessage = useNotificationStore((state) => state.setMessage);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setMessage("User signed out successfully", "success");
    } catch (error) {
      setMessage("Error signing out", "error");
    }
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
};

export default SignOutButton;
