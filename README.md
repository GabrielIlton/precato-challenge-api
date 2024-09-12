# SMS Messaging API

API de mensageria SMS construída com Node.js, TypeScript, Fastify, e TypeORM.
Permite o envio e gerenciamento de status de mensagens SMS e fornece endpoints para atualizar o status e listar mensagens com base no status.

## Pré-requisitos

Certifique-se de ter o seguinte software instalado na sua máquina:

- [Node.js](https://nodejs.org/) - versão 14 ou superior
- [PostgreSQL](https://www.postgresql.org/) - Configurado e rodando

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/GabrielIlton/sms-precato-api.git
   cd sms-precato-api
   ```

2. Instale as dependências do projeto:
   npm install

3. Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente:
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=seu_usuario_postgres
   DB_PASSWORD=sua_senha_postgres
   DB_NAME=nome_do_banco_de_dados

4. Configure o banco de dados no PostgreSQL (crie o banco se necessário):
   psql -U seu_usuario_postgres -c "CREATE DATABASE nome_do_banco_de_dados;"

## Rodando a Aplicação

1. Execute as migrações do banco de dados para criar as tabelas:
   npm run typeorm migration:run

2. Inicie o servidor:
   npm run dev

3. A API estará disponível em http://localhost:3000.
