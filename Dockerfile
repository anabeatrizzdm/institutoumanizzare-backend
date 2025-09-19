# 1. Use Node.js LTS
FROM node:20-alpine

# 2. Diretório de trabalho
WORKDIR /usr/src/app

# 3. Copiar package.json e package-lock.json
COPY package*.json ./

# 4. Instalar dependências
RUN npm install

# 5. Copiar o restante do código
COPY . .

# 6. Expor porta
EXPOSE 3000

# 7. Comando de desenvolvimento do NestJS
CMD ["npm", "run", "start:dev"]

