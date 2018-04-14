FROM kirillkonshin/nginx-nodejs
COPY ./nginx.conf /etc/nginx/nginx.conf
ADD . /terrasse
WORKDIR /terrasse
RUN npm install -P
RUN npm run prod
RUN cp -r ./dist /usr/share/nginx/html/
CMD nginx -g 'daemon off;'
