FROM node:alpine
WORKDIR /app
RUN npm install -g @angular/cli
COPY package.json .
RUN npm install
COPY . .
RUN ng build --prod

FROM nginx
EXPOSE 4200
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/dist/my-app /usr/share/nginx/html
