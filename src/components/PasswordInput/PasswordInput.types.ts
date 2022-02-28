import type {ClassNames, DwebbleSize} from "../../packages/dwebble-styles/src";
import type useStyles from "./PasswodInput.styles";
import type {TextInputStylesNames} from "../TextInput/TextInput.types";

export type PasswordInputStylesNames = ClassNames<typeof useStyles> | TextInputStylesNames;

export interface PasswordInputStyles {
	size: DwebbleSize;
	rightSectionWidth: number;
}
