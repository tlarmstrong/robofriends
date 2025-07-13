import React from 'react';

import './card.styles.css';

const Card = ({ robot }) => {
  const { id, username, name, email } = robot;
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 robocard'>
      <img alt={username} src={`https://robohash.org/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
