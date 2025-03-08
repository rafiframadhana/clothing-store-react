import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  username: localStorage.getItem("username") || "",
  login: (username) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", username);
    set({ isAuthenticated: true, username });
  },
  logout: () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    set({ isAuthenticated: false, username: "" });
  },
}));

export default useAuthStore;
