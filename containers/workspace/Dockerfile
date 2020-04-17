ARG NODE_VERSION
FROM node:${NODE_VERSION}

ARG WORKING_DIR
WORKDIR ${WORKING_DIR}


# Set the Chrome repo.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list
# Install Chrome.
RUN apt-get update && apt-get -y install google-chrome-stable

RUN npm install -g @angular/cli

RUN usermod -aG audio,video node
USER node
