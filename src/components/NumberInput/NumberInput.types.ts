import type {DwebbleNumberSize, DwebbleSize} from "@dwebble/styles";

export interface NumberInputStylesParams {
	radius: DwebbleNumberSize;
	size: DwebbleSize;
}

export type NumberInputFormatter = (value: string | undefined) => string;
export type NumberInputParser = (value: string | undefined) => string | undefined;
