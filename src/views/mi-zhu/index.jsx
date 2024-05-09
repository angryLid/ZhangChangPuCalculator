import { useMemo, useEffect } from "react";
import { Dialer, Quiz, Resolutions } from "~/components";
import { useCardContext } from "~/contexts/CardContext";
import { combine, equals } from "~/utils/algo";

export default () => {
	const { cards, init } = useCardContext();
	const result = useMemo(() => {
		const process = (_numbers) => {
			const numbersWithoutZero = _numbers.filter((n) => !!n);
			let combines = combine(numbersWithoutZero).filter((item) =>
				equals(item, [13]),
			);
			const set = new Set();
			for (const item of combines) {
				const key = item.toString();
				if (set.has(key)) {
					item.duplicated = true;
				}
				set.add(key);
			}
			combines = combines.filter((a) => !a.duplicated);
			combines.sort((a, b) => b.length - a.length);
			return combines.slice(0, 10).map((item) => [[13], item]);
		};
		const numbers = cards.map((c) => c.value);
		return process(numbers);
	}, [cards]);

	useEffect(() => {
		init(16);
	}, []);
	return (
		<div>
			<Quiz />
			<Dialer />
			<Resolutions result={result} />
		</div>
	);
};
