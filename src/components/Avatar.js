import React from 'react';
export default function Avatar({ name, image }) {
  return (
    <div>
      <div>
        <img src={image} style={{ width: 100, height: 100 }} />
      </div>
      <div>{name}</div>
    </div>
  );
}
