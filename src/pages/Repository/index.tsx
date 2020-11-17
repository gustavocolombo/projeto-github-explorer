import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepositoryInfo } from '../Repository/styles';
import logo from '../../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi';
interface RepositoryParamas{
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParamas>();

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

    </>
  );
}

export default Repository;
