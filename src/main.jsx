import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import Nav from './common/Nav';
import { Container } from 'react-bootstrap'


ReactDOM.render(
  <React.StrictMode>
    <Nav />

    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
)
