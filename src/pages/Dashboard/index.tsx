import React, { useState, useEffect, FormEvent } from 'react';

import logo from '../../assets/github_explorer.svg';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface Repository{
  full_name: string;
  owner:{
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {

  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    const response = await api.get(`repos/${newRepo}`);

    const repository  = response.data

    setRepositories([...repositories, repository])
  }

  return (
    <>
      <img src= {logo}  alt= "Github Explorer"/>
      <Title> Explore Repositórios no Github Explorer </Title>

      <Form onSubmit={handleAddRepository}>
        <input
        placeholder="Digite aqui o nome do repositório"
        value={newRepo}
        onChange={(e)=> setNewRepo(e.target.value)}/>

        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
       {repositories.map( repository => {
         return (
          <a key={repository.full_name} href="teste">
            <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20}/>
          </a>
        )
       })}

      </Repositories>
    </>
  );

}

export default Dashboard;
