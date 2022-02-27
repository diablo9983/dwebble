/*!
 * Create a new object composed of properties picked from another object
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} obj   The object to pick properties from
 * @param  {Array}  props An array of properties to use
 * @return {Object}       The new object
 */
export function pick (obj: Record<string, any>, props: string[]): Record<string, any> {
	// Create new object
	const picked: Record<string, any> = {};

	// Loop through props and push to new object
	for (let prop of props) {
		picked[prop] = obj[prop];
	}

	// Return new object
	return picked;
}
