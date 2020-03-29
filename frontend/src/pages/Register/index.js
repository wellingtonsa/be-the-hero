import React from 'react';
import { FiArrowLeft }  from 'react-icons/fi';
import { Link } from 'react-router-dom';
import  './styles.css';

import logo from '../../assets/logo.svg';

export default function Register() {
  return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logo} alt="Be The Hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
            
                <Link to="/" className="back-link">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para o logon
                </Link>
            </section>
            <form>
                <input placeholder="Nome da ONG"/>
                <input type="email" placeholder="E-mail"/>
                <input placeholder="WhatsApp"/>
                
                <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" style={{ width: 80}}/>
                </div>

                <button type="submit" className="button">Cadastrar</button>
            </form>
        </div>
    </div>
  );
}
