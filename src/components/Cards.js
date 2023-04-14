import React, { useState } from 'react';
import Avatar from './Avatar';
export default function Cards({ title, users, subtitle }) {
  const Card = ({ name }) => {
    const [isConnected, setConnected] = useState(false);
    return (
      <div className="card">
        <Avatar name={name} image="https://i.pravatar.cc/300" />
        <button type="button" onClick={() => setConnected(!isConnected)}>
          {!isConnected ? 'Connect Now' : 'Connected'}
        </button>
      </div>
    );
  };
  return (
    <div className="cards-main">
      <div className="card-header">
        <h3>{title}</h3>
        <a>See All</a>
      </div>
      <h6>{subtitle}</h6>
      <div className="cards">
        {users &&
          users.map((item) => {
            return <Card name={item.name} />;
          })}
      </div>
    </div>
  );
}
