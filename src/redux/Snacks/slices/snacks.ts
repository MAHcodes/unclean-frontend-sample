import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../hooks";
import { ISnack } from "../types";

const initialSnacksState: ISnack = {
  message: "",
  open: false,
};

const snacksSlice = createSlice({
  name: "snacks",
  initialState: initialSnacksState,
  reducers: {
    createSnack(_, action: PayloadAction<ISnack>) {
      return {
        open: true,
        autoHideDuration: action.payload.autoHideDuration || 3000,
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
