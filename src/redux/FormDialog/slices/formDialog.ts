import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ENTITY } from "../../../services/Abstractions/EntitiesNames";
import { useAppSelector } from "../../hooks";
import { IFormDialog } from "../types";

const initialFormDialogState: IFormDialog = {};

const formDialogSlice = createSlice({
  name: "formDialog",
  initialState: initialFormDialogState,
  reducers: {
    openFormDialog: (state, action: PayloadAction<ENTITY>) => {
      state.target = action.payload;
    },
    setFormData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    closeFormDialog: () => {
      return initialFormDialogState;
    },
  },
});

export const { setFormData, openFormDialog, closeFormDialog } =
  formDialogSlice.actions;

export const useFormDialog = () => useAppSelector((state) => state.formDialog);

export default formDialogSlice.reducer;
