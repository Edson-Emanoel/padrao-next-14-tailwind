import Link from "next/link"
import { ElementType } from "react"
import { FaPersonBooth, FaAndroid, FaVideo } from "react-icons/fa"

interface ItemMenuProps{
    icone: ElementType
    label: string
    url: string
}

function ItemMenu( props: ItemMenuProps ){
    return(
        <Link href={props.url} className="flex gap-3 py-1 px-1 hover:bg-gray-800 rounded-md text-2xl">
            <props.icone className="text-zinc-200" size={25} />
            <span className="text-zinc-200">{props.label}</span>
        </Link>
    )
}

export default function Menu(){
    return(
        <div className="w-[300px] bg-zinc-800 h-screen border-r border-white">
            <nav className="flex flex-col gap-2 py-2 px-3">
                <ItemMenu icone={FaVideo} label="Aulas" url="/" />
                <ItemMenu icone={FaPersonBooth} label="Cadastro Aluno" url="/" />
                <ItemMenu icone={FaAndroid} label="Cadastro Pokemon" url="/" />
            </nav>
        </div>
    )
}