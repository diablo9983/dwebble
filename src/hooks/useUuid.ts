import {randomId} from "./utils/random-id";

export function useUuid(staticId: string) {
	if (staticId) {
		return staticId;
	}
	return randomId();
}
