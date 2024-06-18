import { create } from "zustand";

interface NotificationState {
  message: string;
  type: "success" | "error";
  setMessage: (message: string, type: "success" | "error") => void;
  clearMessage: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  message: "",
  type: "success",
  setMessage: (message, type) => set({ message, type }),
  clearMessage: () => set({ message: "", type: "success" }),
}));
