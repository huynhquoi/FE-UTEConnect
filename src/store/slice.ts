import { Post_Like } from "@/graphql/controller-types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface State {
  profileUser: object;
  imageUrl: string | null;
  postReaction: Post_Like[];
}

const initialState: State = {
  profileUser: {},
  imageUrl: null,
  postReaction: [],
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
    setPostReaction: (state, action: PayloadAction<Post_Like[]>) => {
      state.postReaction = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProfileUser, setImageUrl, clearImageUrl, setPostReaction } =
  Slice.actions;

export default Slice.reducer;
