import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ENTITY } from "../../../services/Abstractions/EntitiesNames";
import { useAppSelector } from "../../hooks";
import { IFormDialog } from "../types";

const initialFormDialogState: IFormDialog = {
  target: undefined,
};

const formDialogSlice = createSlice({
  name: "formDialog",
  initialState: initialFormDialogState,
  reducers: {
    openFormDialog: (state, action: PayloadAction<ENTITY>) => {
      state.target = action.payload;
    },
    closeFormDialog: (state) => {
      state.target = initialFormDialogState.target;
    },
  },
});

export const { closeFormDialog, openFormDialog } = formDialogSlice.actions;

export const useFormDialog = () => useAppSelector((state) => state.formDialog);

export default formDialogSlice.reducer;
