import React from 'react';
import { Header } from 'shared/components/Header';
import anyaImage from 'assets/anya.png';

export function App() {
  return (
    <div>
      <Header />
      <img src={anyaImage} alt="Anya" />
      <h1>222222</h1>
    </div>
  );
}
