import { ReactNode } from "react"
import Menu from "../Menu/Menu"

interface LayoutProps{
    children: ReactNode
}

export default function LayoutApp( props: LayoutProps ){
    return(
        <div className="flex">
            <Menu />
            <section className="flex-1 bg-zinc50 text-white bg-gray-800">
                { props.children }
            </section>
        </div>
    )
}