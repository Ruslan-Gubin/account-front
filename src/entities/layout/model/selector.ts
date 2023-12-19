import { useAppSelector } from "../../../shared";
import { layoutSlice } from "./slice";

const eventsSelect = (state: RootState) => state.layout;
export const layoutAction = layoutSlice.actions;
export const layoutReducer = layoutSlice.reducer;

export const useLayoutSelect = () => {
  return useAppSelector(eventsSelect);
};
