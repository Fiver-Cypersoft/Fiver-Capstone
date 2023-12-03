// rxslice
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoading: false,
};

let SpinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setLoadingOn: (state, action) => {
      state.isLoading = true;
    },
    setLoadingOff: (state, action) => {
      state.isLoading = false;
    },
  },
});
export let { setLoadingOff, setLoadingOn } = SpinnerSlice.actions;
export default SpinnerSlice.reducer;
