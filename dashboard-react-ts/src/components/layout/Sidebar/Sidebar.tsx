import React from "react";

import { NavLink } from "react-router-dom";

import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink to="/" >
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                </ul>
                <h3>Curriculo</h3>
                <ul>
                    <li>
                        <NavLink to="/curriculo/informacoes/cadastro" >
                            Cadastrar Informaçoes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/cadastros" >
                            Cadastrar Experiências
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/lista" >
                            listagens de Experiências
                        </NavLink>
                    </li>
                </ul>
                <h3>Portfolio</h3>
                <ul>
                    <li>
                        <NavLink to="/portfolio/cadastro" >
                            Cadastrar Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio/Listagens">
                            Listagens de Portfolios
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div >
    );
};

export default Sidebar;