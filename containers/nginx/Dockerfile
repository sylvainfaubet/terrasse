FROM nginx
COPY dist/terrasse-front /usr/share/nginx/html/terrasse
COPY containers/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

#RUN apt-get update && apt-get install nano
