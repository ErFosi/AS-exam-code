FROM node:slim

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copiar tods ls json al directorio /app
COPY app.js /app
COPY  test.js /app
COPY package.json /app
# Ejecutar npm install

RUN npm install
