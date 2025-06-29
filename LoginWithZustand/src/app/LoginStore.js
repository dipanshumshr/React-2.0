import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLogin = create(
  persist((set) => ({
    user: {
      username: "",
      password: "",
    },

    login: (userDetails) => {
      set(() =>
          ({user : {
            username: userDetails.name,
            password: userDetails.password,
          }}));
    },

    logOut: () => {
      set(() => ({
        user: {
          username: "",
          password: "",
        },
      }));
    }
  }),
{
      name: 'login-storage', // 💾 this is the localStorage key
})
);

export default useLogin;
