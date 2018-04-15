FROM sinet/nginx-node:latest

# Install and build the application
COPY . /terrasse
WORKDIR /terrasse
RUN npm install -P \
	&& npm run prod \
	&&
COPY nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
