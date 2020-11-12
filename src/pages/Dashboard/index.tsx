import React, { useState, FormEvent } from 'react';

import logo from '../../assets/github_explorer.svg';
import { Title, Form, Repositories, Error } from './styles';
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
  const [inputError, setInputError] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    if(!inputError){
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try{
      const response = await api.get(`repos/${newRepo}`);

      const repository  = response.data

      setRepositories([...repositories, repository])
      setInputError('');
      setNewRepo('');
    }catch(err){
      setInputError('Erro na busca do repositório');
    }
  }

  return (
    <>
      <img src= {logo}  alt= "Github Explorer"/>
      <Title> Explore Repositórios no Github Explorer </Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
        <input
        placeholder="Digite aqui o nome do repositório"
        value={newRepo}
        onChange={(e)=> setNewRepo(e.target.value)}/>

        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
       {repositories.map( repository => {
         return (
          <a key={repository.full_name} href="teste">
            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>

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
