import "styled-components";
import { ThemeI } from "../interfaces/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeI {}
}
