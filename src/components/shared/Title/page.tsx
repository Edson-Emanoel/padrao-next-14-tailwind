import { ElementType } from "react"

interface TitleProps{
    title: string
    icon: ElementType;
}

export default function Title( props: TitleProps){
    return(
        <header className="bg-zinc-800 flex items-center justify-between py-3 px-2 text-white font-extrabold mb-5 w-[2300px] border-b border-white">
            <props.icon size={35} stroke={2} />
            <div className="flex mt-2">
                <h1>{props.title}</h1>
            </div>
        </header>
    )
}