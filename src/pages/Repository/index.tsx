import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParamas{
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParamas>();

  return (
    <h1>Repository: {params.repository}</h1>
  );
}

export default Repository;
