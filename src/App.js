import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContCard from './components/productСards/ContainerCard'


function App(props) {

  return (
    <div className='App'>
      <div className='Main'>
            <ContCard/>
      </div>
    </div>
  );
}

export default App;
