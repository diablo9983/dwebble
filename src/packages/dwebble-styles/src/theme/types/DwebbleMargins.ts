import type { DwebbleNumberSize } from "./DwebbleSize";

export type DwebbleMargin = "m" | "my" | "mx" | "mt" | "mb" | "ml" | "mr";
type MarginValue = DwebbleNumberSize | (string & {});

export interface DwebbleMargins {
	m?: MarginValue,
	my?: MarginValue,
	mx?: MarginValue,
	mt?: MarginValue,
	mb?: MarginValue,
	ml?: MarginValue,
	mr?: MarginValue
}
