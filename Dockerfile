FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/gato-prueba/ /usr/share/nginx/html
EXPOSE 80
