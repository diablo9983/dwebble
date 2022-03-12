import type {ClassNames, DwebbleSize} from "@dwebble/styles";
import type useStyles from "./PasswordInput.styles";
import type {TextInputStylesNames} from "../TextInput/TextInput.types";

export type PasswordInputStylesNames = ClassNames<typeof useStyles> | TextInputStylesNames;

export interface PasswordInputStyles {
	size: DwebbleSize;
	rightSectionWidth: number;
}
