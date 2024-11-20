import React from 'react';
// @ts-ignore
import logo from '../img/logo1.jpg';
import { FaHome, FaTools } from 'react-icons/fa';
// @ts-ignore
import { usePages } from '../ctx/ctxPage.tsx';

function Header() {
  const { setPage } = usePages();

  return (
    <header className="App-header">
      <div>
        <button
        className='btn'
        onClick={() => setPage('Index')}>
          <FaHome />
        </button>
      </div>

      <div>
        <button
        className='btn'
        onClick={() => setPage('SobreNosotros')}>
          <img src={logo} alt="Logo Empresa" />
        </button>
      </div>

      <div>
        <button
        className='btn'
        onClick={() => setPage('Tools')}>
          <FaTools />
        </button>
      </div>
    </header>
  );
}

export default Header;
