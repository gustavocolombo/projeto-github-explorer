import React from 'react';

import logo from '../../assets/github_explorer.svg';
import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src= {logo}  alt= "Github Explorer"/>
      <Title> Explore Repositórios no Github Explorer </Title>

      <Form>
        <input placeholder="Digite aqui o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );

}

export default Dashboard;
