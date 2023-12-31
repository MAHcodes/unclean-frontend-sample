import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./features/dialogSlice";
import formDialogReducer from "./FormDialog/slices/formDialog";
import preferencesReducer from "./Preferences/Slices/index";
import snacksReducer from "./Snacks/slices/snacks";

export const store = configureStore({
  reducer: {
    dialog: dialogSlice,
    preferences: preferencesReducer,
    snacks: snacksReducer,
    formDialog: formDialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
