import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Home from '../components/pages/home'

  ;
import CadastrarInformacoes from '..//components/pages/curriculo/Cadastrarinformaçoes';
import CadastrarExperiencia from '..//components/pages/curriculo/CadastraExperiencia';
import ListaExperiencia from '..//components/pages/curriculo/CadastraExperiencia';
import ListaPortfolio from '../components/pages/portfolio/ListaPortfolio';
import CadastrarPortfolio from '../components/pages/portfolio/CadastraPotfolio'

import Layout from '../components/layout/Layout';
import { useAuth } from "../contexts/AuthContexts";

const AppRoutes: React.FC = () => {
  const { authenticated, isLoading } = useAuth();

  if (isLoading) {
    return <h3>Carregando...</h3>;
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
        <Route path="/curriculo/experiencia/cadastros" element={<CadastrarExperiencia />} />
        <Route path="/curriculo/experiencia/lista" element={<ListaExperiencia />} />
        <Route path="/portfolio/cadastro" element={<CadastrarPortfolio />} />
        <Route path="/portfolio/listagens" element={<ListaPortfolio />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;