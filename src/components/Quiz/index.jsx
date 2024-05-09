import { useEffect, useMemo } from "react";
import { useCardContext } from "~/contexts/CardContext";
import { Card } from "../Card";
import cls from "./style.module.css";
export const Quiz = () => {
	const { cards, init, del } = useCardContext();

	const activeIndex = useMemo(() => {
		return cards.findIndex((card) => !card.value);
	}, [cards]);

	return (
		<div className={cls.question}>
			{cards.map((card, index) => (
				<Card
					key={index}
					point={card.value}
					type={
						index === activeIndex ? "active" : card.value ? "deletable" : null
					}
					onClick={() => {
						del(index);
					}}
				></Card>
			))}
		</div>
	);
};
