FROM node:slim

# Establece el directorio de trabajo en /app
WORKDIR /app
CD app

# Copiar tods ls json al directorio /app
COPY app.js test.js package.json /app/

# Ejecutar npm install
RUN npm install
