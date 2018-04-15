FROM resin/raspberry-pi-node

# Install and build the application
COPY . /terrasse
WORKDIR /terrasse

RUN npm install -P &&  npm run prod

RUN apt-get update && apt-get install nginx
COPY terrasse.nginx.conf /etc/nginx/sites-available/default

CMD ["nginx", "-g", "daemon off;"]
