import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../hooks";
import { isDarkMode, THEMEMODE } from "../helpers";
import { IColor, PreferenceOptions } from "../types";

const initialPreferencesState = {
  mode: THEMEMODE.LIGHT,
  colors: {
    primary: {
      main: "#212121",
    },
  },
};

const Preferences = createSlice({
  name: "preferences",
  initialState: initialPreferencesState as PreferenceOptions,
  reducers: {
    changePrimaryColor(prefrencesState, { payload }: PayloadAction<IColor>) {
      prefrencesState.colors.primary.main = payload;
    },
    changeThemeMode(prefrencesState, action: PayloadAction<THEMEMODE>) {
      prefrencesState.mode = action.payload;
    },
    toggleThemeMode(prefrencesState) {
      prefrencesState.mode = isDarkMode(prefrencesState.mode)
        ? THEMEMODE.LIGHT
        : THEMEMODE.DARK;
    },
  },
});

export const { changePrimaryColor, changeThemeMode, toggleThemeMode } =
  Preferences.actions;

export const usePreference = () => useAppSelector((state) => state.preferences);

export const useThemeMode = () =>
  useAppSelector((state) => state.preferences.mode);

export default Preferences.reducer;
