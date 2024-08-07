import { create } from "zustand";
import { User } from "../typings/user";

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

// Add persist to zustand
export const useUser = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
