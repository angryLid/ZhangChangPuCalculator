import cls from "./style.module.css"
export const Card = ({ children, point, type = "default", onClick}) => {
    const cardUi = (point) => {
        const dict = {0: ' ', 1: 'A', 11: 'J', 12: 'Q', 13: 'K'}
        return dict[point] || point
    }
    return (
        <div 
            className={[cls.cardbase, cls[type], cls.button ].join(" ")}
            onClick={onClick}
        >
            {children ? children : cardUi(point)}
        </div>
    )
}