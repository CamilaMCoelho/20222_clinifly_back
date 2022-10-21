
<p align="center">
  <a href="#-stack">✨ Stack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">💻 Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-endpoints">📋 Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#octocat-instalação">:octocat: Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-feito-por">:rocket: Feito por</a>
</p>

<br />

## ✨ Stack

- [ ] Express
- [ ] [Prisma](https://www.prisma.io/)
- [ ] TypeScript
- [ ] [JsonWebToken](https://jwt.io/)

## 💻 Projeto

O Clinifly é uma API REST desenvolvida na faculdade para projeto [Clinifly](#), onde o principal intuito aprender construir API com microserviços, além disso aplico também os seguintes princípios:

- SOLID
- Design Patterns
- Clean Architecture
- Clean Code

## 📋 Endpoints

As seguintes rotas estão configuradas:

> Primeiro Microserviço
>> - `/patients` - POST - Cadastrar o patiente no banco de dados (Cadastro)
>> - `/auth` - POST - Autenticar o patiente (Login)

> Segundo Microserviço
>> - `/appointment` - POST - Cadastrar uma consulta no nome do paciente
>> - `/appointment` - GET - Retorna os dados da(s) consulta(s) do paciente pelo CPF

## :octocat: Instalação

Para clonar o repositório:

```sh
git clone https://github.com/CamilaMCoelho/20222_clinifly_back.git
```

Execute o seguinte comando em seu terminal para criar o banco de dados PostgreSQL e as tabelas representada no Schema: 

```sh
npx prisma migrate dev
```

Para instalar as dependências com NPM:

```sh
npm install
```

Para instalar as dependências com Yarn:

```sh
yarn install
```

Iniciar o ambiente de desenvolvimento com NPM:

```sh
npm run dev
```

Iniciar o ambiente de desenvolvimento com Yarn:

```sh
yarn dev
```

## :rocket: Feito por
◼️ Camila Monteiro Coelho - RA: 82119736

◼️ Italo da Silva Alves - RA: 82118114
