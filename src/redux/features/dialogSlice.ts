import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface DialogState {
  open?: boolean;
  title: string;
  context: string;
  agree: () => void;
}

const initialState: DialogState = {
  open: false,
  title: "",
  context: "",
  agree: () => {},
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    dialogIt: (state, action: PayloadAction<DialogState>) => {
      state.open = true;
      state.title = action.payload.title;
      state.context = action.payload.context;
      state.agree = action.payload.agree;
    },
    cancel: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { dialogIt, cancel } = dialogSlice.actions;

export default dialogSlice.reducer;
