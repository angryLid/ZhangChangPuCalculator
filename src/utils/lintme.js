export function argumentsSlice() {
	return arguments.slice();
}

export function chatAtCompare() {
	return "123".charAt(0) === "12";
}

export function equals(a, b, c) {
	return (a == b) == c;
}

export function objEqual(a) {
	return a == {};
}

export function badMin(a) {
	return Math.max(1, 2, Math.min(0, 100));
}

export function badReplaceAll() {
	return "  ".replaceAll(/\s+/, "");
}

export function missingThrow() {
	new Error();
}

export function outOfRange(n) {
	let m = (33).toString(n || 64);
	return (1).toString(64);
}

export function emptyArrayCb() {
	const nonError = Array(4).map((_) => 123);
	return new Array(4).map((_) => 123);
}
