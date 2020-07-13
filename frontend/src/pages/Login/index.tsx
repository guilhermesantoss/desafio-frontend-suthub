import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Button, Label, Input, Alert } from 'reactstrap';
import api from '../../services/api';

import './styles.css';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [show, setShow] = useState(false);

  const history = useHistory();

  const toggle = () => setShow(!show);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { email, password } = formData;

    const data = {
      email,
      password
    }

    if (email.length !== 0 && password.length >= 6) {
      setShow(false);

      const response = await api.post('/login', data);

      localStorage.setItem("token", response.data.token);
      
      history.push('/list-countries'); 
    } else {
      toggle();
      return;
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <Alert 
        className="absolute" 
        color="danger" 
        isOpen={show} 
        toggle={toggle}
      >
        Preencha os campos corretamente!
      </Alert>
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