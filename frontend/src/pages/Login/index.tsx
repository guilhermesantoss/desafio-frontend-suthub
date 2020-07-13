import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';
import api from '../../services/api';

import './styles.css';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { email, password } = formData;

    const data = {
      email,
      password
    }

    const response = await api.post('/login', data);
 
    localStorage.setItem("token", response.data.token);
    
    history.push('/list-countries'); 
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <div className="container center">
        <h2>Login</h2>

        <Form className="form-container" onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email</Label>
            <Input 
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email" 
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Senha</Label>
            <Input 
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              onChange={handleInputChange}
            />
          </FormGroup>

          <Button color="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;