ARG NODE_VERSION
FROM node:${NODE_VERSION}

ARG WORKING_DIR
WORKDIR ${WORKING_DIR}

RUN apt-get update && apt-get install -y chromium
ENV CHROME_BIN /snap/bin/chromium

RUN npm install -g @angular/cli

USER node
