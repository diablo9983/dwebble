import type {CSSObject, DwebbleMargins, DwebbleTheme} from "@dwebble/styles";
import {useCss, useDwebbleTheme} from "@dwebble/styles";
import {getMargins} from "./get-margins";

type Sx = CSSObject | ((theme: DwebbleTheme) => CSSObject);
export type BoxSx = Sx | Sx[];

function extractSx(sx: Sx, theme: DwebbleTheme) {
	return typeof sx === "function" ? sx(theme) : sx;
}

export function useSx(sx: BoxSx, margins: DwebbleMargins, className: string) {
	const theme = useDwebbleTheme();
	const { css, cx } = useCss();

	if (Array.isArray(sx)) {
		return cx(
			className,
			css(getMargins(margins, theme)),
			sx.map((partial) => css(extractSx(partial, theme)))
		);
	}

	return cx(className, css(extractSx(sx, theme)), css(getMargins(margins, theme)));
}
