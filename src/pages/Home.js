import React from 'react';
import { USERS } from '../data/users';
import { Cards } from '../components/';
export default function Home() {
  return (
    <div>
      <Cards users={USERS} title="Recently Added" />
    </div>
  );
}
