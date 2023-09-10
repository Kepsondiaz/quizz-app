import React from 'react';
import { useState } from 'react';
import { Home } from './components/Home';
import { quiz } from './helpers/Questions';
import { type } from '@testing-library/user-event/dist/type';
import { Question } from './components/Question';
  
function App() {
  const [view, setView] = useState('home')
  
  return (  
    <div className="App">
      <Home />
      <Question />
    </div>
  );
}

export default App;
