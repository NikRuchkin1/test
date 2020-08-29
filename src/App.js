import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import ContCard from './components/productСards/ContainerCard'


function App(props) {

  return (
    <div className='App'>
      <div className='Main'>
        <Container fluid>
          <ContCard/>
        </Container>
      </div>
    </div>
  );
}

export default App;
