import LayoutApp from "@/components/shared/LayoutApp/page";
import Title from "@/components/shared/Title/page";
import { FaPeopleCarry } from "react-icons/fa";

export default function Aulas(){
    return(
        <LayoutApp>
            <Title icon={FaPeopleCarry} title="Aulas" subTitle="Aulas para apreender" />
        </LayoutApp>
    )
}