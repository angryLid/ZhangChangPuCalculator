import { createContext, useContext, useReducer } from "react";

export const CardContext = createContext({})
export const useCardContext = () => useContext(CardContext)

const CardProvider = ({children}) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'init':
                const a = Array.from({length: action.payload}, () => ({type: "blank", value: null }))
                a[0].type = "active"
                return a
            case 'push':{
                state = structuredClone(state)
                for(let i = 0; i < state.length; i ++){
                    if(!state[i].value){
                        state[i].value = action.payload
                        state[i].type = "filled"
                        break;
                    }
                }
                return state
            }
               
            case 'delete':{
                state = structuredClone(state)
                if(typeof action.payload === 'number'){
                    state[action.payload].value = null
                    state[action.payload].type = "blank"
                }else {
                    for(let i = state.length - 1; i >= 0; i --){
                        if(state[i].value){
                            state[i].value = null
                            state[i].type = "blank"
                            break;
                        }
                    }
                }
                return state
            }
            default:
                return state
        }
    }
    const [cards, dispatch] = useReducer(reducer, [])

    const init = (count) => {
        dispatch({type: 'init', payload: count})
    }

    const push = (point) => {
        dispatch({type: 'push', payload: point})
    }

    const del = (index) => {
        dispatch({type: 'delete', payload: index})
    }
    return (
        <CardContext.Provider value={{ cards, init, push, del }}>
            {children}
        </CardContext.Provider>
    )
}

export default CardProvider