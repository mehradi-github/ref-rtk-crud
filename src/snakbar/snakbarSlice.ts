import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface SnakbarState {
  size?: "small" | "medium" | "large";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  duration?: number;
  message: string;
  created: Date;
}

const initialState: SnakbarState[] = [
  {
    size: "small",
    color: "inherit",
    duration: 6000,
    message: "Note archived",
    created: new Date(),
  },
];
export const snakbarSlice = createSlice({
  name: "snakbarSlice",
  initialState,
  reducers: {
    Add: (state, action: PayloadAction<SnakbarState>) => {
      state.push({ ...action.payload, created: new Date() });
      //   state.sort((a,b)=>b.created.getTime()-a.created.getTime());
    },
    Remove: (state) => {
      state.shift();
    },
  },
});

export const { Add, Remove } = snakbarSlice.actions;
export const selectSnackbar = (state: RootState) => state.snakbars;
export default snakbarSlice.reducer;
