import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const useImageStore = () => {
  const imageUrl = useSelector(
    (state: RootState) => state.sliceReducer.imageUrl
  );

  return imageUrl;
};
