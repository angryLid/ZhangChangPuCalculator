import { useEffect, useMemo } from "react";
import cls from "./style.module.css";
import { useCardContext } from "~/contexts/CardContext";
import { algo } from "~/utils/algo";
import { Card } from "~/components";
export const Resolutions = ({ result = [] }) => {
	const romanNumerals = useMemo(
		() => ({
			1: "I",
			2: "II",
			3: "III",
			4: "IV",
			5: "V",
			6: "VI",
			7: "VII",
			8: "VIII",
			9: "IX",
			10: "X",
		}),
		[],
	);

	return (
		<div className={cls.answers}>
			{result.map((r, i) => (
				<div className={cls.answer} key={i}>
					<div className={cls.ordinals}>{romanNumerals[i + 1]}</div>

					{r[0].map((c, i) => (
						<Card key={i} color="red" point={c}></Card>
					))}
					{r[1].map((c, i) => (
						<Card key={"blue" + i} color="blue" point={c}></Card>
					))}
				</div>
			))}
		</div>
	);
};
