# Precato Challenge API

API de mensageria SMS construída com Node.js, TypeScript, Fastify, e TypeORM.
Permite o envio e gerenciamento de status de mensagens SMS e fornece endpoints para atualizar o status e listar mensagens com base no status.

## Pré-requisitos

Instale os softwares:

- [Node.js](https://nodejs.org/) - LTS

Instale o [PostgresSQL](https://www.postgresql.org/) ou configure a imagem Docker:
```
docker pull postgres:16
docker run --name meu-postgres -e POSTGRES_PASSWORD=minha_senha -e POSTGRES_DB=meu_banco -p 5432:5432 -d postgres:16
```

## Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/GabrielIlton/precato-challenge-api.git
   cd precato-challenge-api
   ```

2. Instale as dependências do projeto:
   ```
   npm install
   ```

3. Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente:
   ```
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=seu_usuario_postgres
   DB_PASSWORD=sua_senha_postgres
   DB_NAME=nome_do_banco_de_dados
   ```
   
## Rodando a Aplicação

1. Inicie o servidor:
   ```
   npm run dev
   ```

2. A API estará disponível em http://localhost:3000.

## Script para inserir Mensagens no banco:
```
INSERT INTO sms_messages (phone, message, status, "createdAt", "updatedAt")
VALUES
('2199999999', 'Você tem precatórios a receber do governo federal', '', NOW(), NOW()),
('2199999999', 'Deseja antecipar R$1.000,00 de processo a receber?', '', NOW(), NOW()),
('2199999999', 'Precatório municipal em fase de recebimento', '', NOW(), NOW()),
('2199999999', 'R$20.000,00 a receber por processo trabalhista, quer saber mais?', '', NOW(), NOW()),
('2199999999', 'Precatório judicial em andamento', '', NOW(), NOW()),
('2199999999', 'R$2.000,00 em saldo de precatórios acumulado, saiba como resgatar', '', NOW(), NOW()),
('2199999999', 'R$21.050,00 a receber por processo trabalhista, quer saber mais?', '', NOW(), NOW()),
('2199999999', 'Deseja antecipar R$100.000,00 de processo a receber?', '', NOW(), NOW()),
('2199999999', 'R$6.000,00 em saldo de precatórios acumulado, saiba como resgatar', '', NOW(), NOW()),
('2199999999', 'Precatório de dívida ativa', '', NOW(), NOW()),
('2199999999', 'Precatório federal com previsão de pagamento para mais de um ano, deseja receber agora?', '', NOW(), NOW()),
('2199999999', 'Processo atraso no pagamento, antecipe conosco', '', NOW(), NOW()),
('2199999999', 'Precatório com correção monetária', '', NOW(), NOW()),
('2199999999', 'R$10.000,00 em saldo de precatórios acumulado, saiba como resgatar', '', NOW(), NOW()),
('2199999999', 'Precatório liberado para saque', '', NOW(), NOW());
```
