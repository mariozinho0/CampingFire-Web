import React from 'react';
import { Link } from 'react-router-dom';

// CSS STYLES
import '../styles/pages/Register.css';

// IMAGES
import LogoImg from '../assets/images/logo.png';

function Register() {
  return (
    <div id="page-register">
      <Link to="/" >
        <img src={LogoImg} className="logo-camping-fire" alt="Camping Fire"/>
      </Link>
      <Link to="/">
        <button className="btn-back">Voltar</button>
      </Link>
      <div className="container">
        <h1>Cadastrar</h1>
        <form>
          <label>
            Nome do local
          </label>
          <input type="text" placeholder="Digite o nome do local..."/>

          <label>
            Estado
          </label>
          <select id="estado" name="estado">
              <option selected disabled>Selecione o estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
          </select>

          <label>
            Cidade
          </label>
          <input type="text" placeholder="Digite sua cidade..."/>

          <label>
            Endereço
          </label>
          <input type="text" placeholder="Digite seu endereço..."/>

          <label>
            Whatsapp
          </label>
          <input type="number" placeholder="(xx) xxxxx-xxxx"/>

          <label>
            Sobre
          </label>
          <textarea id="" name="sobre" placeholder="Descreva seu camping..." cols={5} rows={8} />
        </form>

        <button type="submit">Cadastrar</button>
      </div>
    </div>
  )
}

export default Register;
