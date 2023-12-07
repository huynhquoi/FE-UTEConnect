import { User } from "@/graphql/controller-types";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const useGlobalStore = () => {
  const profileUser = useSelector(
    (state: RootState) => state.sliceReducer.profileUser
  ) as User;

  return profileUser;
};
