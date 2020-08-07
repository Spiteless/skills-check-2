import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Form/>
    </div>
  );
}

export default App;
