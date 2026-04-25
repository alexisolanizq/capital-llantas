FROM node:20-alpine as builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine

# borrar config default
RUN rm /etc/nginx/conf.d/default.conf

# copiar nueva config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# limpiar html
RUN rm -rf /usr/share/nginx/html/*

# copiar build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]