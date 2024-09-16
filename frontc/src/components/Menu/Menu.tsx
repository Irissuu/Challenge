import { Link } from "react-router-dom";
import { MenuContainer } from '../../style/styles';

export default function Menu() {
  return (
    <MenuContainer>
      <p><Link to="/equipe">Equipe</Link></p>
      <p><Link to="/registrarveiculo">RegistrarVeículo</Link></p>
    </MenuContainer>
  );
}

