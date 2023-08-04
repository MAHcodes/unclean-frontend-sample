import { ThemeMode } from "../types";

export enum THEMEMODE {
  DARK = "dark",
  LIGHT = "light",
}

export const isDarkMode = (mode: ThemeMode) => mode === THEMEMODE.DARK;
