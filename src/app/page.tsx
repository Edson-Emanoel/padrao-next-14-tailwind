import LayoutApp from "@/components/shared/LayoutApp/page";
import Title from "@/components/shared/Title/page";
import { FaHouse } from "react-icons/fa6";

export default function Home() {
  return (
    <LayoutApp>
      <Title icon={FaHouse} title="Login" />

      <div className="container px-5">
        <p>Teste</p>
      </div>
    </LayoutApp>
  );
}
