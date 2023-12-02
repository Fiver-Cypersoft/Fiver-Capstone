import { configureStore } from "@reduxjs/toolkit";
import spinnerSlice from "../redux/slice/SpinnerSlice";
import userSlice from "../redux/slice/userSlice";
import loginFormSlice from "../redux/slice/loginFormSlice";

export let store = configureStore({
  reducer: {
    spinnerSlice,
    userSlice,
    loginFormSlice,
  },
});
