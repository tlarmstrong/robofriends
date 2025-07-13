import React from 'react';

import Card from '../../components/card/card.component';

import './card-list.styles.css';

const CardList = ({robots}) => {
  return robots.map(robot => {
    return (
      <Card robot={robot} key={robot.id} />
    );
  })
}

export default CardList;
