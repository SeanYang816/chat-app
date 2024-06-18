import React from 'react';
import { Header } from 'shared/components/Header'
import anyaImage from 'assets/anya-smile.png'
import { Avatar } from '@mui/material';

export function App() {
  return (
    <div>
      <Avatar alt="Anya Forger" src={anyaImage} />
    </div>
  );
}
