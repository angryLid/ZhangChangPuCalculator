import {Suspense} from "react"
import {useRoutes} from "react-router-dom"
import routes from '~react-pages'
import "./global.css"
// import "./styles.css"
import CardProvider from "./contexts/CardContext"
export const App = () => {
    
    return <Suspense fallback={<div>loading...</div>}> <CardProvider>
        <div>always here</div>
    {useRoutes(routes)}
    </CardProvider></Suspense>
  
}