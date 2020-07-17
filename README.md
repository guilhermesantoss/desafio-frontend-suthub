# desafio-frontend-suthub

<p>
  <img src="https://img.shields.io/github/repo-size/guilhermesantoss/desafio-frontend-suthub" alt="Repository Size" />
  <img src="https://img.shields.io/github/last-commit/guilhermesantoss/desafio-frontend-suthub" alt="Last Commit" />
  <img src="https://img.shields.io/github/languages/count/guilhermesantoss/desafio-frontend-suthub?color=red" alt="Languages Used" />
  <img src="https://img.shields.io/github/license/guilhermesantoss/desafio-frontend-suthub?color=yellow" alt="License" />
</p>

## Executando o Back-end

Começando pelo back-end, entre na pasta "backend/" e instale todas as dependências do projeto utilizando o comando:
```bash
$ npm install
```

Agora vamos criar o Banco de Dados utilizando o comando:
```bash
$ npm run knex:migrate
```

Em seguida vamos criar um arquivo ".env" dentro da pasta "backend/" com duas constantes:
```
APP_SECRET=CHAVE_SECRETA_ALEATORIA
PORT=3333
```
Recomendado usar o site [md5](https://www.md5hashgenerator.com/) para gerar a chave secreta.

Por fim, para deixar o servidor rodando, vamos executar o comando:
```bash
$ npm run dev
```

## Executando o Front-end

Com o nosso Back-end rodando, agora podemos iniciar o processo de instalação das dependências na pasta "frontend/" utilizando o comando:
```bash
$ npm install
```

Agora que as dependências estão devidamente instaladas, vamos executar o Front-end utilizando o comando:
```bash
$ npm start
```

## Tecnologias utilizadas

* [Node.js](https://nodejs.org/)
* [React](https://reactjs.org/)
* [Reactstrap](https://reactstrap.github.io/)
* [Typescript](https://www.typescriptlang.org/)

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
