# SMS Messaging API

API de mensageria SMS construída com Node.js, TypeScript, Fastify, e TypeORM.
Permite o envio e gerenciamento de status de mensagens SMS e fornece endpoints para atualizar o status e listar mensagens com base no status.

## Pré-requisitos

Instale os seguintes softwares:

- [Node.js](https://nodejs.org/) - LTS

Instale o [PostgresSQL](https://www.postgresql.org/) ou configure a imagem Docker:
```bash
docker pull postgres:16
docker run --name meu-postgres -e POSTGRES_PASSWORD=minha_senha -e POSTGRES_DB=meu_banco -p 5432:5432 -d postgres:16
```
## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/GabrielIlton/sms-precato-api.git
   cd sms-precato-api
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente:
   ```bash
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=seu_usuario_postgres
   DB_PASSWORD=sua_senha_postgres
   DB_NAME=nome_do_banco_de_dados
   ```
   
## Rodando a Aplicação

1. Inicie o servidor:
   ```bash
   npm run dev
   ```

2. A API estará disponível em http://localhost:3000.
