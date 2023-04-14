import React from 'react';
import Avatar from './Avatar';
export default function Cards({ title, users }) {
  const Card = ({ name }) => {
    return (
      <div>
        <Avatar name={name} image="https://i.pravatar.cc/300" />
      </div>
    );
  };
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {users &&
          users.map((item) => {
            return <Card name={item.name} />;
          })}
      </div>
    </div>
  );
}
