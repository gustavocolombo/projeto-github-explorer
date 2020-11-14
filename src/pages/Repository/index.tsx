import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header } from '../Repository/styles';
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
    </>
  );
}

export default Repository;
