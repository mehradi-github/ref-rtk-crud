import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface SnakbarState {
  message: string;
}

const initialState: SnakbarState[] = [
  {
    message: "Note archived",
  },
];
export const snakbarSlice = createSlice({
  name: "snakbarSlice",
  initialState,
  reducers: {
    Add: (state, action: PayloadAction<SnakbarState>) => {
      state.push({ ...action.payload });
      //   state.sort((a,b)=>b.created.getTime()-a.created.getTime());
    },
    Remove: (state) => {
      state.shift();
    },
  },
});

export const { Add: AddSnackbar, Remove: RemoveSnackbar } =
  snakbarSlice.actions;
export const selectSnackbar = (state: RootState) => state.snakbars;
export default snakbarSlice.reducer;
