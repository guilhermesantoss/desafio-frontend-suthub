import React, { useState, useEffect } from 'react';
import { Table,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import './styles.css';

interface RestCountriesResponse {
  name: string;
  capital: string;
  latlng: [
    number,
    number
  ];
}

const ListCountries: React.FC = () => {
  const [countries, setCountries] = useState<RestCountriesResponse[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    axios.get<RestCountriesResponse[]>('https://restcountries.eu/rest/v2/region/americas').then(response => {
      const serializedCountries = response.data.map(country => (
        { name: country.name, capital: country.capital, latlng: country.latlng }
      ));
      setCountries(serializedCountries);
    });
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  function handleClose() {
    localStorage.removeItem("token");
  
    history.push('/');
  }

  function handleOpenMaps(latlng: number[]) {
    window.open(`https://www.google.com/maps/@${latlng[0]},${latlng[1]},5z`, "_blank");
  }

  return (
    <div className="container">
      <Navbar color="light" light expand="md">
        <NavbarBrand>Lista de Países</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink></NavLink>
            </NavItem>
          </Nav>
          <Link to=""><NavbarText onClick={handleClose}>Sair</NavbarText></Link>
        </Collapse>
      </Navbar>
      <Table>
        <thead>
          <tr>
            <th>País</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {
            countries.map(c => (
              <tr key={c.name}>
                <td className="open-map" onClick={() => handleOpenMaps(c.latlng)}>{c.name}</td>
                <td>{c.capital}</td>
              </tr>
            ))
          }
        </tbody>
      </Table> 
    </div> 
  );
}

export default ListCountries;