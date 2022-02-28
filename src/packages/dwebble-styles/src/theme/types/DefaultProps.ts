import type {DwebbleMargins} from "./DwebbleMargins";
import type {CSSObject, CSSProperties} from "../../tss/types/css-object";
import type {DwebbleTheme} from "./DwebbleTheme";
import type {ProviderStyles} from "./DwebbleProvider";

export interface DefaultProps<T extends string = never> extends DwebbleMargins {
	class?: string;
	style?: CSSProperties;
	sx?: CSSObject | ((theme: DwebbleTheme) => CSSObject);
	classNames?: Partial<Record<T, string>>;
	styles?: ProviderStyles;
}
