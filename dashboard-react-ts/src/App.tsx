
import React from 'react';

import{ BrowserRouter, Route, Routes } from 'react-router-dom';

import  Layout  from './components/layout/Layout';

import Home from './components/pages/home';
import Cadastrarinformaçoes from './components/pages/curriculo/Cadastrarinformaçoes';

const App: React.FC = ()=> {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculo/cadastro/informaçoes" element={<Cadastrarinformaçoes />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  ) 
};

export default App;
