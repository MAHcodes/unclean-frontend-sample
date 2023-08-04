import { ThemeMode } from "../types";

export enum THEMEMODE {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

export const isDarkMode = (mode: ThemeMode) => mode === THEMEMODE.DARK;

export const isSystemMode = (mode: ThemeMode) => mode === THEMEMODE.SYSTEM;

export const systemToThemeMode = (preferesDarkMode: boolean) =>
  preferesDarkMode ? THEMEMODE.DARK : THEMEMODE.LIGHT;
