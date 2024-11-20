import React from 'react';
import Header from './util/Header';
import './App.css';
import { usePages } from './ctx/ctxPage';
import type {tpages} from './ctx/ctxPage.tsx';

import SobreNosotros from './pages/SobreNosotros/SobreNosotros.tsx';
import Index from './pages/index/Index.tsx';
import Tools from './pages/Tools/Tools.tsx';

function App() {
  const {page} = usePages();

  const Principal: Partial<Record<tpages, React.ReactNode>> = {
    'Index': <Index/>,
    'SobreNosotros': <SobreNosotros/>,
    'Tools': <Tools/>,
  }
  
  return (
    <div className="App">
      <Header/>
      <main>
        {page}
        {Principal[page]}
      </main>
    </div>
  );
}

export default App;
