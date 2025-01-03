FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

# Install the Angular CLI
RUN npm install -g @angular/cli@13
RUN npm ci

COPY . .

RUN npm run build --configuration production

FROM nginx:alpine

COPY --from=build /app/docs /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]