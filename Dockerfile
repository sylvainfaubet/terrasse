FROM kirillkonshin/nginx-nodejs
RUN mkdir -p /usr/share/nginx/html
ADD ./package.json /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN npm install
ADD . /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD npm run prod && nginx -g 'daemon off;'
