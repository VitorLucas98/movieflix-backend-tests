# MovieFlix
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/VitorLucas98/movieflix-backend-tests/blob/main/LICENSE) 

# Sobre o projeto

https://vitor-movieflix.netlify.app/

MovieFlix é uma aplicação full stack web construída como desafio da primeira turma do **Bootcamp DevSuperior**; [DevSuperior](https://devsuperior.com "Site da DevSuperior").

O sistema consiste em um catálogo de filmes com suas avaliações, onde apenas os usuarios logados (membros ou visitantes) podem ver a listagem, podendo a listagem ser ordenada por gênero, sendo que apenas o usuario que tenha o papel de membro pode fazer as avaliações.


## Layout web

![Home](https://github.com/VitorLucas98/movieflix-backend-tests/blob/main/assets/home.png)

![Movies Catalog](https://github.com/VitorLucas98/movieflix-backend-tests/blob/main/assets/catalogMovies.png)

![Movie details](https://github.com/VitorLucas98/movieflix-backend-tests/blob/main/assets/movieDetails.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/VitorLucas98/movieflix-backend-tests/blob/main/assets/conceptualmodel.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- Spring Security
- JPA / Hibernate
- Maven
## Front end
- HTML 
- CSS 
- JS / TypeScript
- ReactJS
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/VitorLucas98/movieflix-backend-tests

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/VitorLucas98/movieflix-backend-tests

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Vitor Lucas Fernandes Botelho

https://www.linkedin.com/in/vítor-lucas-1b54b5191
