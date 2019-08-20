import React from 'react';
import './Inicial.css';
import imagem from '../assets/imagem.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/Github.png';

export default function Inicial({ history }) {
  async function handleClick(e) {
    e.preventDefault();
    history.push(`/experiencias/`);
  }
  return (
    <div className="main-container">
      <ul>
        <li className="main-card">
          <img src={imagem} alt="foto pessoal" />
          <strong>Renan de Souza Lima</strong>
          <p>Email:
            <a className='email'
              href="mailto:renansouza.21.109@icloud.com">
              renansouza.21.109@icloud.com</a>
          </p>
          <p>Celular: (44) 99847-6626</p>
          <p>Residente: MARINGÁ - PR</p>
          <p>Full Stack Developer</p>
          <div className="buttons">
            <a href="https://www.linkedin.com/in/orenansouza/" target="blank" >
              <img className="icons" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/orenansouza" target="blank">
              <img className="icons" src={github} alt="github" />
            </a>
          </div>
          <button type="button" onClick={handleClick}>Experiências</button>
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