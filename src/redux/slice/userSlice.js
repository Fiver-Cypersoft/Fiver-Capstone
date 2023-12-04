import { createSlice } from "@reduxjs/toolkit";
import { userLocalStorage } from "../../api/localService";

const initialState = {
  user: userLocalStorage.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLogin: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;
