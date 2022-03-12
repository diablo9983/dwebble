import cx from 'clsx';
import { mergeClassNames } from './merge-class-names';

const classes = {
	root: 'root-1',
	title: 'title-1',
};

describe('@dwebble/tss/merge-class-names', () => {
	it('merges classNames correctly', () => {
		expect(
			mergeClassNames(cx, classes, { root: 'root-test', title: 'title-test' }, 'alert')
		).toEqual({
			root: 'root-1 root-test dwebble-alert-root',
			title: 'title-1 title-test dwebble-alert-title',
		});
	});

	it('merges classNames partial correctly', () => {
		expect(mergeClassNames(cx, classes, { root: 'root-test' }, 'alert')).toEqual({
			root: 'root-1 root-test dwebble-alert-root',
			title: 'title-1 dwebble-alert-title',
		});
	});
});
