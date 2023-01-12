import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Teik",
    age: 23,
    about: "I'm a software engineer",
    avaUrl:
      "https://i.redd.it/snoovatar/avatars/f713bd7e-3471-40ae-a62d-302783d8bb6d.png",
    themeColor: "#ff9051",
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
