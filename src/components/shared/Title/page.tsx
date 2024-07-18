import { ElementType } from "react"

interface TitleProps{
    title: string
    subTitle: string
    icon: ElementType;
}

export default function Title( props: TitleProps){
    return(
        <header className="bg-blue-700 p-3 rounded-md text-white font-extrabold mb-5">
            <props.icon size={35} stroke={2} />
            <div className="flex mt-2">
                <h1>{props.title}</h1>
                <h3>{props.subTitle}</h3>
            </div>
        </header>
    )
}