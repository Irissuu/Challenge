import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GlobalStyles,
  AuthContainer,
  AuthTitle,
  AuthInputBox,
  AuthInput,
  AuthIcon,
  AuthButton,
  AuthSwitch,
  ErrorText,     
  SuccessMessage 
} from '../../style/styles';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    contact: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAuth = () => {
    setError('');
    setSuccess(false);

    if (isLogin) {
      // Login
      if (formData.email && formData.password) {
        navigate('/home');
      } else {
        setError('Por favor, preencha o email e a senha.');
      }
    } else {
      // Cadastro
      const { name, email, cpf, contact, password } = formData;
      if (name && email && cpf && contact && password) {
        setSuccess(true); 
        setIsLogin(true);
      } else {
        setError('Por favor, preencha todos os campos.');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAuth();
  };

  return (
    <>
    <GlobalStyles />
    <AuthContainer>
      <AuthTitle>{isLogin ? 'Login' : 'Cadastro'}</AuthTitle>
      <form onSubmit={handleSubmit}>
        {error && <ErrorText>{error}</ErrorText>}
        {success && <SuccessMessage>Cadastro realizado!{'\n'}Faça login para prosseguir.</SuccessMessage>}
        {!isLogin && (
          <>
            <AuthInputBox>
              <AuthInput
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
              />
              <AuthIcon className="bx bx-user" />
            </AuthInputBox>
            <AuthInputBox>
              <AuthInput
                type="text"
                name="cpf"
                placeholder="CPF"
                value={formData.cpf}
                onChange={handleChange}
                required={!isLogin}
              />
              <AuthIcon className="bx bx-id-card" />
            </AuthInputBox>
            <AuthInputBox>
              <AuthInput
                type="text"
                name="contact"
                placeholder="Contato"
                value={formData.contact}
                onChange={handleChange}
                required={!isLogin}
              />
              <AuthIcon className="bx bx-phone" />
            </AuthInputBox>
          </>
        )}
        <AuthInputBox>
          <AuthInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <AuthIcon className="bx bx-envelope" />
        </AuthInputBox>
        <AuthInputBox>
          <AuthInput
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <AuthIcon className="bx bx-lock" />
        </AuthInputBox>
        <AuthButton type="submit">
          {isLogin ? 'Acessar' : 'Cadastrar'}
        </AuthButton>
        <AuthSwitch onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Criar uma conta' : 'Já possui uma conta?'}
        </AuthSwitch>
      </form>
      </AuthContainer>
    </>
  );
}