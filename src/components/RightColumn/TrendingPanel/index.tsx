import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Rocketseat</span>
              <span className="subtext">há 1 d • 444 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Rocketseat</span>
              <span className="subtext">há 2 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Desfile 7 de setembro</span>
              <span className="subtext">há 3 d • 33 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Concerto Beethoven nº 0  6</span>
              <span className="subtext">há 4 d • 645 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Marfrig faz o teu churrasco!</span>
              <span className="subtext">há 6 d • 666 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Rocketseat</span>
              <span className="subtext">há 10 d • 454 leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
