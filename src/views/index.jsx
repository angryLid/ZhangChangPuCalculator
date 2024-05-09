import { useEffect, useMemo } from "react";
import { Dialer, Quiz, Resolutions } from "~/components";
import { useCardContext } from "~/contexts/CardContext";
import { algo } from "~/utils/algo";
export default () => {
	const { cards, init } = useCardContext();
	const result = useMemo(() => {
		const process = (_numbers) => {
			const numbersWithoutZero = _numbers.filter((n) => !!n);
			if (numbersWithoutZero.length < 4) {
				return [];
			}
			const numbers = algo(numbersWithoutZero);
			numbers.sort(
				(a, b) => a[0].length + a[1].length - b[0].length - b[1].length,
			);
			numbers.reverse();
			return numbers.slice(0, 10);
		};
		const numbers = cards.map((c) => c.value);
		return process(numbers);
	}, [cards]);
	useEffect(() => {
		init(10);
	}, []);
	return (
		<div>
			<Quiz />
			<Dialer />
			<Resolutions result={result} />
		</div>
	);
};
