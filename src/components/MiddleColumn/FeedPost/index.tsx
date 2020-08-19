import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/2/21/Global_fundo_transparente.png" alt="Rocketseat" />
          <Column>
            <h3>Marfrig Global Foods</h3>
            <h4>845.324 seguidores</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://s2.glbimg.com/-hW3-h44n3bz2fZTKYgjLGBcRlY=/696x390/smart/filters:cover():strip_icc()/s.glbimg.com/jo/g1/f/original/2015/05/15/marfrig.jpg"
          alt="Rocketseat Blog"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
