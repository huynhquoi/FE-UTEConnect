import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface State {
  profileUser: object;
  imageUrl: string | null;
}

const initialState: State = {
  profileUser: {},
  imageUrl: null,
};

export const Slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    getProfileUser: (state, action: PayloadAction<object>) => {
      state.profileUser = action.payload;
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    clearImageUrl: (state) => {
      state.imageUrl = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProfileUser, setImageUrl, clearImageUrl } = Slice.actions;

export default Slice.reducer;
