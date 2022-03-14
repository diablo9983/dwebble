import type {DwebbleNumberSize} from "@dwebble/styles";
import type {CSSProperties} from "@emotion/serialize";

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

export interface GroupStylesParams {
	position: GroupPosition;
	noWrap: boolean;
	grow: boolean;
	spacing: DwebbleNumberSize;
	direction: 'row' | 'column';
	align: CSSProperties['alignItems'];
	count: number;
}
