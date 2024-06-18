import React, { useEffect } from "react";
import { SnackbarContainer } from "./Snackbar.styles";
import { useNotificationStore } from "../../../store/notificationStore";

const Snackbar: React.FC = () => {
  const { message, type, clearMessage } = useNotificationStore();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearMessage();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  if (!message) return null;

  return <SnackbarContainer type={type}>{message}</SnackbarContainer>;
};

export default Snackbar;
