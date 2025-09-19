# 📘 Instituto Umanizzare API

API RESTful desenvolvida com [NestJS](https://nestjs.com) para gerenciamento de funcionalidades internas do Instituto Umanizzare.  
O projeto utiliza **NestJS + Fastify**, **TypeORM com PostgreSQL**, **Swagger** para documentação e está preparado para rodar em **Docker** com hot-reload para desenvolvimento.

---

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/) – Framework Node.js
- [Fastify](https://fastify.dev/) – Adaptador de alto desempenho para Nest
- [TypeORM](https://typeorm.io/) – ORM para PostgreSQL
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados
- [Swagger](https://swagger.io/) – Documentação da API
- [Docker](https://www.docker.com/) – Containerização e ambiente de desenvolvimento

---

## 📂 Estrutura do Projeto

```
src/
├── app.module.ts      # Módulo raiz
├── main.ts            # Bootstrap da aplicação
├── common/            # Filtros, interceptors, pipes globais
├── modules/           # Módulos de features (usuários, uploads, etc)
├── models/            # Entidades TypeORM
└── migrations/        # Migrations do banco de dados
```

---

## ⚙️ Configuração

Copie o arquivo **.env.example** para **.env** na raiz do projeto:

```env
# Aplicação
APP_NAME=Instituto Umanizzare API
APP_PORT=3000
APP_URL=http://localhost:3000

# Banco de Dados
DB_HOST=postgres
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=umanizzare
```

### 🔹 Observações

- Rodando via Docker: as configurações do banco acima funcionam diretamente com o serviço PostgreSQL definido no docker-compose.yml.
- Rodando localmente sem Docker: altere DB_HOST, DB_USER, DB_PASSWORD e DB_NAME para as credenciais do seu banco PostgreSQL local, por exemplo:


```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario_local
DB_PASSWORD=sua_senha_local
DB_NAME=umanizzare_local
```

---

## ▶️ Executando o projeto

### 1. Com Node.js instalado (sem Docker)

```bash
# Instalar dependências
npm install

# Rodar em modo dev (hot-reload)
npm run start:dev

# Rodar em modo produção
npm run start:prod
```

A aplicação estará disponível em:
- http://localhost:3000  
- Documentação Swagger: http://localhost:3000/api/docs

### 2. Com Docker (recomendado)

```bash
# Subir containers (API + PostgreSQL)
docker-compose up --build
```

---

## 🗄️ Migrations (TypeORM)

```bash
# Gerar nova migration
npm run migration:generate -- src/database/migrations/NomeDaMigration

# Rodar migrations
npm run migration:run

# Reverter última migration
npm run migration:revert
```

---

## 📖 Documentação da API

Acesse a documentação interativa do Swagger:  
👉 http://localhost:3000/api/docs

---

## 📜 Licença

Este projeto é licenciado sob a MIT License.