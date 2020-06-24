import React from 'react';
import './App.css';
import SectionTitle from './components/SectionTitle';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <SectionTitle title='Teste' iconName='coffee'/>
  );
}

export default App;
