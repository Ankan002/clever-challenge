import React from 'react';
import './style.css';
import Header from './components/Header';
import Body from "./components/Body";

export default function App() {
  return (
    <div className={'container'}>
      <Header />
      {/* Create Card Component Here */}
      <Body />
    </div>
  );
}
