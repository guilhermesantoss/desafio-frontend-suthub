import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="container center">
      <h2>Desafio Front End Suthub</h2>
      
      <div className="btn-container">
        <Link to="/login">
          <Button color="primary">
            Entrar
          </Button>
        </Link>

        <Link to="/register">
          <Button color="primary">
            Registrar
          </Button>
        </Link>
      </div> 
    </div>
  );
}

export default Home;