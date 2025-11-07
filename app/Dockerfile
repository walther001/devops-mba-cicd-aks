# Etapa 1: Build da aplicação React
FROM node:18-alpine AS build
WORKDIR /app

# Copia package.json e package-lock.json primeiro (cache)
COPY package.json package-lock.json ./

# Instala dependências
RUN npm install

# Copia o código-fonte
COPY . .

# Faz o build da app
RUN npm run build

# Etapa 2: Servir com Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
