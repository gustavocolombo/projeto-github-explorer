import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from '../Repository/styles';
import logo from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
interface RepositoryParamas{
  repository: string;
}
interface Repository{
  full_name: string;
  owner:{
    login: string;
    avatar_url: string;
  };
  description: string;
  forks_count:number;
  stargazers_count:number;
  open_issues_count:number;
}

interface Issue{
  id:number;
  title:string;
  user: {
    login:string;
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParamas>();

  const[repository, setRepository] = useState<Repository | null>(null);
  const[issues, setIssues] = useState<Issue[]>([]);

  useEffect(()=> {

    api.get(`repos/${params.repository}`).then(response=>{
     setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response=>{
      setIssues(response.data);
    })

  }, [params.repository]);

  return (
    <>
      <h1>Repository: {params.repository}</h1>
      <Header>
        <img src={logo} alt="logo"/>
        <Link to ="/">
          <FiChevronLeft size={16}/>
          Voltar para listagem
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
        </header>

        <ul>
          <li>
            <strong>{repository.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repository.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository.open_issues_count}</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      )}
      <Issues>
        <Link to="/">

          <div>
            <strong>teste issue</strong>
            <p>teste issue</p>
          </div>

          <FiChevronRight size={20}/>
        </Link>
      </Issues>

    </>
  );
}

export default Repository;
