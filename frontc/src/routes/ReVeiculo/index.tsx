import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Rodape from '../../components/Rodape/Rodape';
import { 
  GlobalStyles,
  VeiculoContainer, 
  VeiculoForm, 
  VeiculoCadInput, 
  ReVeiculoBtn, 
  VeiculoTitle, 
  VeiculoDescription,
  VoltarBtn,
  ErrorText,
  SuccessMessage 
} from '../../style/styles';  


import seta from '../../img/seta.png'

export default function ReVeiculo() {
  const [placa, setPlaca] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setError('');
    
    if (
      placa.trim() === '' ||
      marca.trim() === '' ||
      modelo.trim() === '' ||
      ano.trim() === '' ||
      cpf.trim() === ''
    ) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    const anoNum = parseInt(ano);
    if (isNaN(anoNum) || anoNum < 1886 || anoNum > 2024 || ano.length !== 4) {
      setError('Adicione um ano válido com 4 dígitos.');
      return;
    }

    // sucesso
    setSuccess(true);

    // delay
    setTimeout(() => {
      navigate('/home');
    }, 1000); 
  };

  return (
    <>
    <GlobalStyles />
    <VeiculoContainer>
      <VeiculoForm onSubmit={handleSubmit}>
        <VeiculoTitle>Cadastre seu veículo</VeiculoTitle>
        <VeiculoDescription>
        Registrar seu veículo permitirá que a inteligência artificial Zoe ofereça
        diagnósticos mais precisos, aprimorando a sua experiência e garantindo resultados eficazes.
        </VeiculoDescription>
        {error && <ErrorText>{error}</ErrorText>}
        {success && <SuccessMessage>Veículo registrado com sucesso!</SuccessMessage>} 
        <VeiculoCadInput
          type="text"
          placeholder="Placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        />
        <VeiculoCadInput
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <VeiculoCadInput
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
        <VeiculoCadInput
          type="text"
          placeholder="Ano"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />
        <VeiculoCadInput
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <ReVeiculoBtn type="submit">Cadastrar</ReVeiculoBtn>
      </VeiculoForm>

      <VoltarBtn as={Link} to="/home">
        <img src={seta} alt="voltar" />
        Voltar
      </VoltarBtn>
    </VeiculoContainer>
    <Rodape />
    </>
  );
}
