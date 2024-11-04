"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Rodape from "@/components/Rodape/Rodape";

export default function ReVeiculo() {
  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!placa.trim() || !marca.trim() || !modelo.trim() || !ano.trim() || !cpf.trim()) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    const anoNum = parseInt(ano);
    if (isNaN(anoNum) || anoNum < 1886 || anoNum > 2024 || ano.length !== 4) {
      setError("Adicione um ano válido com 4 dígitos.");
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      router.push("/home");
    }, 1000);
  };

  return (
    <div>
    <div className="reveiculo">
      <div className="reveiculobase">
        <h2>Cadastre seu veículo</h2>
        <p>
          Registrar seu veículo permitirá que a inteligência artificial Zoe ofereça
          diagnósticos mais precisos, aprimorando a sua experiência e garantindo
          resultados eficazes.
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">Veículo registrado com sucesso!</p>}
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Placa"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            className="inputveiculo"
          />
          <input
            type="text"
            placeholder="Marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            className="inputveiculo"
          />
          <input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            className="inputveiculo"
          />
          <input
            type="text"
            placeholder="Ano"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            className="inputveiculo"
          />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="inputveiculo"
          />
          <button type="submit" className="btnveiculocad">
            Cadastrar
          </button>
        </form>

        <div className="mt-4 flex justify-center">
          <Link href="/home">
            <button className="btnvoltarveiculo">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
    {/*mudei o nome da pasta, medo de não ir então estou cometando para dar commit*/}
      <Rodape />
      </div>
  );
}
