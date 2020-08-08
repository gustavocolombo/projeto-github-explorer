import React from 'react';

import logo from '../../assets/github_explorer.svg';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src= {logo}  alt= "Github Explorer"/>
      <Title> Explore Repositórios no Github Explorer </Title>

      <Form>
        <input placeholder="Digite aqui o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
       <a href="teste">
        <img src="https://avatars3.githubusercontent.com/u/66711378?s=460&u=1892f3e33fa834fb432991d37145567f42a6212c&v=4"
          alt= "usuário do github"
        />

        <div>
          <strong>gustavocolombo/ibuyonline</strong>
          <p>Este repositório vai ser destinado a um projeto que estou desenvolvendo, um bazar virtual.</p>
        </div>

        <FiChevronRight size={20}/>
       </a>

       <a href="teste">
        <img src="https://avatars3.githubusercontent.com/u/66711378?s=460&u=1892f3e33fa834fb432991d37145567f42a6212c&v=4"
          alt= "usuário do github"
        />

        <div>
          <strong>gustavocolombo/ibuyonline</strong>
          <p>Este repositório vai ser destinado a um projeto que estou desenvolvendo, um bazar virtual.</p>
        </div>

        <FiChevronRight size={20}/>
       </a>

       <a href="teste">
        <img src="https://avatars3.githubusercontent.com/u/66711378?s=460&u=1892f3e33fa834fb432991d37145567f42a6212c&v=4"
          alt= "usuário do github"
        />

        <div>
          <strong>gustavocolombo/ibuyonline</strong>
          <p>Este repositório vai ser destinado a um projeto que estou desenvolvendo, um bazar virtual.</p>
        </div>

        <FiChevronRight size={20}/>
       </a>
      </Repositories>
    </>
  );

}

export default Dashboard;
