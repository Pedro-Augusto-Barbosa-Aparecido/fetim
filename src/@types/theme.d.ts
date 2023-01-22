import {theme} from "../style/theme"

type Theme = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends Theme {}
}
