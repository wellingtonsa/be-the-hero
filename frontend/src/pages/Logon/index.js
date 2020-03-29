import React from 'react';
import { FiLogIn }  from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

import heroesImage from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
  return (
    <div className="logon-container">
        <section className="form">
            <img src={logo} alt="Be The Hero"/>

            <form action="">
                <h1>Faça seu logon</h1>
                <input  placeholder="Sua ID"/>
                <button  className="button" type="submit">Entrar</button>

                <Link to="/register" className="back-link">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tem cadastro
                </Link>
            </form>
        </section>
        <img src={heroesImage} alt="heroes"/>
    </div>
  );
}
