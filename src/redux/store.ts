import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./features/dialogSlice";
import preferencesReducer from "./Preferences/Slices/index";

export const store = configureStore({
  reducer: {
    dialog: dialogSlice,
    preferences: preferencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
