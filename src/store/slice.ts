import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface State {
  profileUser: object;
}

const initialState: State = {
    profileUser: {},
};

export const Slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    getProfileUser: (state, action: PayloadAction<object>) => {
      state.profileUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProfileUser } = Slice.actions;

export default Slice.reducer;
