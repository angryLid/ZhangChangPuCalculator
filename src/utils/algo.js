/**
 * 求数组的组合
 * @param {number[]} numbers
 * @param {number} minLength
 * @returns {number[][]}
 */
export function combine(numbers, minLength = 2) {
	const output = [];

	function backtrack(start, curr) {
		output.push([...curr]);
		for (let i = start; i < numbers.length; i++) {
			curr.push(numbers[i]);
			backtrack(i + 1, curr);
			curr.pop();
		}
	}

	backtrack(0, []);
	return output.filter((o) => o.length >= minLength);
}
/**
 * 数组分割为和相等的两部分，计算所有答案
 * @param {number[]} numbers
 * @returns {Array<[number[], number[]]>}
 */
export function divide(numbers) {
	const output = [];
	const set = new Set();
	function backtrack(start, subset1, subset2) {
		if (start === numbers.length) {
			if (set.has(subset2 + "/" + subset1)) {
				return;
			}
			output.push([[...subset1], [...subset2]]);
			set.add(subset1 + "/" + subset2);
			return;
		}
		const num = numbers[start];
		subset1.push(num);
		backtrack(start + 1, subset1, subset2);
		subset1.pop();

		subset2.push(num);
		backtrack(start + 1, subset1, subset2);
		subset2.pop();
	}

	backtrack(0, [], []);

	return output.filter(([x, y]) => equals(x, y));
}

/**
 *
 * @param {number[]} numbers
 * @returns
 */
export function algo(numbers) {
	return combine(numbers)
		.map((cb) => divide(cb))
		.filter((cb) => cb.length > 0)
		.flat();
}
/**
 * 判断两个数组是否和相等
 * @param {number[]} x
 * @param {number[]} y
 * @returns {boolean}
 */
export function equals(x, y) {
	const sumx = x.reduce((a, b) => a + b, 0);
	const sumy = y.reduce((a, b) => a + b, 0);
	return sumx === sumy;
}
