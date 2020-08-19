import React from 'react';

import { Container } from './styles';
import Skeleton from '../../Skeleton';

const LoadingTrendingPanel: React.FC = () => {
  const Row = () => (
    <div className="row">
      <Skeleton className="square-skeleton white" />
      <div className="column">
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
      </div>
    </div>
  )

  return (
    <Container>
      <Row />   
      <Row />   
      <Row />   
      <Row />   
    </Container>
  );
};

export default LoadingTrendingPanel;