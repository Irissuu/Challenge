import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li> <Link href="/home">Home</Link> </li>
                <li> <Link href="/equipe">Equipe</Link> </li>
                <li> <Link href="/reveiculo">Registrar Veículo</Link> </li>
                <li> <Link href="/oficinas">Oficinas</Link> </li>
            </ul>
        </nav>
    );
}
