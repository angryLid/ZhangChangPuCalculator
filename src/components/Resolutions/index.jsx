import { useEffect } from "react"
import cls from "./style.module.css"
import { useCardState } from "~/contexts/CardContext"
import {algo} from "~/utils/algo"
export const Resolutions = () => {
    const { cards } = useCardState()
    const numbers = cards.map(c => c.value)
    
    const process = (_numbers) => {
        const numbersWithoutZero = _numbers.filter(n => n !== 0)
        if(numbersWithoutZero.length < 4){
            return;
        }
        const numbers = algo(numbersWithoutZero)
        numbers.sort((a,b) => a[0].length + a[1].length - b[0].length - b[1].length)
        numbers.reverse()
        if(numbers.length > 10){
            numbers.length = 10
        }
        return numbers
    }
    const start = () => {
        process(numbers)
    }
    useEffect(()=> {
        
        // const r = process(algo(numbers))
    // console.log("%c [r]:","background:linear-gradient(#69c,#258, #69c);color:#fff;font-size:14px",r)
    }, [numbers])
    
    return <div className={cls.answers}>
        <button onClick={start}>debug</button>
                <div className={cls.answer}>
                    
                </div>
    </div>
}