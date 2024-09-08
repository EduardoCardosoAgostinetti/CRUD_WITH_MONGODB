# CRUD Simples em Node.js
Este projeto é um exemplo básico de uma aplicação CRUD (Create, Read, Update, Delete) construída com Node.js, Express e MongoDB. Ele demonstra como criar uma API RESTful para gerenciar recursos, permitindo criar, ler, atualizar e excluir dados.

# Funcionalidades:
Criar: Adicionar novos registros ao banco de dados.
Ler: Recuperar e listar registros existentes.
Atualizar: Modificar registros existentes.
Excluir: Remover registros do banco de dados.

# Tecnologias Utilizadas:
Node.js: Ambiente de execução para JavaScript no servidor.
Express: Framework web minimalista para Node.js.
MongoDB: Banco de dados nao relacional para armazenamento dos dados.

# Requisitos:
Node.js instalado
MongoDB instalado e em execução

# Como Executar o Projeto

Navegue até o diretório do projeto e 

# Instale as dependências:
npm install node express mongoose

# Inicie o servidor:
node server.js

# Endpoints:

GET http://localhost:3000/crud/read: Lista todos os users.
POST http://localhost:3000/crud/create: Cria um novo user. (name, email)
PUT http://localhost:3000/crud/update/:id Atualiza um item existente por ID.
DELETE http://localhost:3000/crud/delete/:id Remove um item por ID.