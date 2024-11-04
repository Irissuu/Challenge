import Image from "next/image";
import Menu from "../Menu/Menu";
import logo from "@/img/logoNovaApex.jpg";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div >
          <Image src={logo} alt="logo" width={90} height={50} />
            <h1>NovaApex</h1>
      </div>
      <Menu />
    </header>
  );
}
