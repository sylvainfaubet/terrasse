ARG NODE_VERSION
FROM node:${NODE_VERSION}

RUN apt-get update && \
  apt-get install -y bash-completion

ARG WORKING_DIR
WORKDIR ${WORKING_DIR}

RUN npm install -g @angular/cli

USER node
