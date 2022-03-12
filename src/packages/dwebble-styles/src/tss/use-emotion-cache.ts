import createCache, { EmotionCache, Options } from '@emotion/cache';
import {useDwebbleEmotionOptions} from "../theme";

const defaultCacheOptions: Options = {
	key: 'dwebble',
	prepend: true,
};

export const { getCache } = (() => {
	let cache: EmotionCache;
	let _key = defaultCacheOptions.key;

	function _getCache(options?: Options) {
		if (cache === undefined || _key !== options?.key) {
			_key = options?.key || 'dwebble';
			cache = createCache(options || defaultCacheOptions);
		}

		return cache;
	}

	return { getCache: _getCache };
})();

export function useEmotionCache() {
	const options = useDwebbleEmotionOptions();
	return getCache(options);
}
