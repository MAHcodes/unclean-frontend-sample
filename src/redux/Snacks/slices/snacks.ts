import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISnack } from "../types";
import { useAppSelector } from "../../hooks";

const initialSnacksState: ISnack = {
  message: "",
  autoHideDuration: 3000,
  open: false,
};

const snacksSlice = createSlice({
  name: "snacks",
  initialState: initialSnacksState,
  reducers: {
    createSnack(_, action: PayloadAction<ISnack>) {
      return {
        open: true,
        ...action.payload,
      };
    },
    closeSnack(state) {
      state.open = false;
    },
  },
});

export const { createSnack, closeSnack } = snacksSlice.actions;

export const useSnacks = () => useAppSelector((state) => state.snacks);

export default snacksSlice.reducer;
