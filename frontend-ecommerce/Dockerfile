FROM node:18.18 AS build

WORKDIR /app
COPY package*.json .
RUN npm i --force

COPY . .

ENV VITE_BACKEND_URL=https://kalarybk.app.wowdesarrollos.com
ENV VITE_FRONTEND_URL=https://kalary.app.wowdesarrollos.com/
ENV VITE_APIKEY=4Vj8eK4rloUd272L48hsrarnUA
ENV VITE_MERCHANTID=508029

RUN npm run build


FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/app/
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]