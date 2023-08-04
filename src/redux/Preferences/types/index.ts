export type ThemeMode = "light" | "dark";

export type IColor = string;

export interface IPrimary {
  main: IColor;
}

export interface IColors {
  primary: IPrimary;
}

export interface PreferenceOptions {
  mode: ThemeMode;
  colors: IColors;
}
