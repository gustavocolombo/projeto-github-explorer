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

  const[repositories, setRepositories] = useState<Repository | null>(null);
  const[issues, setIssues] = useState<Issue[]>([]);

  useEffect(()=> {
    async function loadData(): Promise <void>{
      const [repository, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`)
      ])
    }
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

      <RepositoryInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" alt=""/>
            <div>
              <strong>Titulo</strong>
              <p>Descrição</p>
            </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

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
