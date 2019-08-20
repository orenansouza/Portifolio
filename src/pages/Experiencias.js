import React from 'react';

import './Experiencias.css';

import linkedin from '../assets/linkedin.png';
import github from '../assets/Github.png';

export default function Experiencia({ history }) {
  async function handleClick(e) {
    e.preventDefault();
    history.push(`/`);
  }
  return (
    <div className="main-container">
      <ul>
        <li className="experience-card">
          <p className="experience">Experiência</p>
          <strong>Infinit Soluções</strong>
          <p>Período: 27/07/2018 à 18/08/2019</p>
          <p className="office">Cargo: Suporte técnico I (07/2018 à 11/2018)</p>
          <p className="office">Cargo: Programador Júnior I (11/2018 à 04/2019)</p>
          <p className="office">Cargo: Programador Júnior II (04/2019 à 08/2019)</p>
          <div className="div-skills">
            <p className="skill">Skills desenvolvidas</p>
            <p className="skills">C#, Entity Framework, SQL Server, MySql.</p>
          </div>
          <p className="functions">Principais funções</p>
          <p className="description-functions">
            Manutenção do sistema legado como correções de bugs, implementações
            de novas funcionalidades.
          </p>
          <div className="buttons">
            <a href="https://www.linkedin.com/in/orenansouza/" target="blank" >
              <img className="icons" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/orenansouza" target="blank">
              <img className="icons" src={github} alt="github" />
            </a>
          </div>
          <button type="button" onClick={handleClick}>Voltar</button>
        </li>
      </ul>
      <footer>
        <p>
          © 2019 Renan de Souza Lima
        </p>
      </footer>
    </div>
  );
}