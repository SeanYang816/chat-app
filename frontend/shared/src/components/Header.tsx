import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div style={{ background: '#333', padding: '10px', color: '#fff' }}>
      <nav>
        <a href="/" style={{ margin: '0 10px', color: '#fff' }}>Home</a>
        <a href="/chat" style={{ margin: '0 10px', color: '#fff' }}>App 1</a>
        <a href="/another" style={{ margin: '0 10px', color: '#fff' }}>App 2</a>
      </nav>
    </div>
  );
};

