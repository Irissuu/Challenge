import Menu from '../Menu/Menu';
import { CabecalhoContainer } from '../../style/styles';
import logo from '../../img/logoNovaApex.jpg';

export default function Cabecalho() {
  return (
    <CabecalhoContainer>
      <div className='loginho'>
        <img src={logo} alt="Logo da NovaApex" className="logo-img" />
      </div>
      NovaApex
      <Menu />
    </CabecalhoContainer>
  );
}
