import type {DwebbleNumberSize} from "./DwebbleSize";


type DwebbleStyleSystemValue = DwebbleNumberSize | (string & {});

export interface DwebbleStyleSystemProps {
	m?: DwebbleStyleSystemValue;
	my?: DwebbleStyleSystemValue;
	mx?: DwebbleStyleSystemValue;
	mt?: DwebbleStyleSystemValue;
	mb?: DwebbleStyleSystemValue;
	ml?: DwebbleStyleSystemValue;
	mr?: DwebbleStyleSystemValue;

	p?: DwebbleStyleSystemValue;
	py?: DwebbleStyleSystemValue;
	px?: DwebbleStyleSystemValue;
	pt?: DwebbleStyleSystemValue;
	pb?: DwebbleStyleSystemValue;
	pl?: DwebbleStyleSystemValue;
	pr?: DwebbleStyleSystemValue;
}

export type DwebbleStyleSystemSize = keyof DwebbleStyleSystemProps;
