import { Card } from "../Card"
import cls from "./style.module.css"
import {useCardState} from "~/contexts/CardContext"
export const Dialer = () => {
    const cardUi = (point) => {
        const dict = {0: ' ', 1: 'A', 11: 'J', 12: 'Q', 13: 'K'}
        return dict[point] || point
    }

    const cards = Array(13).fill(0).map((_, index) => ({view:cardUi(index + 1), point: index + 1}))
   
    const { push, del } = useCardState()
    return <div className={cls.dialer}>
        {cards.map(({point , view}) => <Card key={point} point={point} onClick={() => { push(point)}}></Card>)}
        <Card type="del" onClick={() => {del()}}>Del</Card>
    </div>
}