import React from 'react';
import './Inicial.css';
import imagem from '../assets/imagem.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/Github.png';

export default function Inicial() {
  return (
    <div className="main-container">
      <ul>
        <li className="main-card">
          <img src={imagem} alt="foto pessoal" />
          <strong>Renan de Souza Lima</strong>
          <p>
            Email: 
            <a className='email' href="mailto:renansouza.21.109@icloud.com" target="_top"> renansouza.21.109@icloud.com</a>
          </p>
          <p>Full Stack Developer</p>
          <div className="buttons">
            <a href="https://www.linkedin.com/in/orenansouza/" target="blank" >
              <img className="icons" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/orenansouza" target="blank">
              <img className="icons" src={github} alt="github" />
            </a>
          </div>
          <button type="button">Experiências</button>
        </li>
        <li className="experience-card">
          <strong>Infinit Soluções</strong>
          <p>Período: 27/07/2018 à 18/08/2019</p>
          <p className="cargo">Cargo: Suporte técnico I (27/07/2018 à 01/11/2018)</p>
          <p className="cargo">Cargo: Programador Júnior I (01/11/2018 à 01/04/2019)</p>
          <p className="cargo">Cargo: Programador Júnior II (01/04/2019 à 18/08/2019)</p>
          <div className="div-skills">
            <p className="skill">Skills desenvolvidas</p>
            <p className="skills">C#, Entity Framework, SQL Server, MySql.</p>
          </div>
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