FROM resin/raspberry-pi-node

# Install and build the application
COPY . /terrasse
WORKDIR /terrasse
RUN npm install -P \
&&  npm run prod

COPY nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
