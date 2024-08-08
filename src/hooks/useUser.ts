import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { User } from "../typings/user";

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

// Define the type for the persist options
type UserStatePersist = UserState & PersistOptions<UserState>;

export const useUser = create<UserState>(
  (persist as any)(
    (set: any) => ({
      user: null,
      setUser: (user: User) => set({ user }),
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
      getStorage: () => localStorage, // specify the storage solution, default is localStorage
      user: null,
      //   @ts-ignore
      setUser: (user) => set({ user }),
    } as UserStatePersist
  )
);
