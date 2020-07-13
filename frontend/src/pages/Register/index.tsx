import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Button, Label, Input, Alert } from 'reactstrap';
import api from '../../services/api';

import './styles.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [show, setShow] = useState(false);

  const history = useHistory();

  const toggle = () => setShow(!show);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, email, password } = formData;

    const data = {
      name,
      email,
      password
    }

    if (name.length !== 0 && email.length !== 0 && password.length >= 6) {
      setShow(false);

      await api.post('/users', data);

      alert("Cadastro realizado com sucesso!")
    
      history.push('/'); 
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
        <h2>Registrar</h2>

        <Form className="form-container" onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nome</Label>
            <Input 
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome" 
              onChange={handleInputChange}
            />
          </FormGroup>

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
            Registrar
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Register;