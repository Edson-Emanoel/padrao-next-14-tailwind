import LayoutApp from "@/components/shared/LayoutApp/page";
import Title from "@/components/shared/Title/page";
import { FaHouse } from "react-icons/fa6";

export default function Home() {
  return (
    <LayoutApp>
      <Title icon={FaHouse} title="Login" subTitle="Tela de cadastro caso tenha só entrar" />

      <p>Teste</p>
    </LayoutApp>
  );
}
