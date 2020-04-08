-include .env ## add BRANCHNAME in .envfile if default needed branch is not develop

ifndef CONTAINER
	CONTAINER=workspace
endif

COMPOSE=docker-compose

help: ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

copy-env: ## copy env-exemple in .env
	cp env-exemple .env

bash: ## Login to container
	$(COMPOSE) exec ${CONTAINER} bash

up: ## start containers
	${COMPOSE} up -d ${CONTAINER}

rebuild: ## rebuild containers
	${COMPOSE} up --build -d ${CONTAINER}

down: ## stop containers
	${COMPOSE} down ${CONTAINER}

prod-deploy: ## run all build and prod publish
prod-deploy:
	${COMPOSE} up --build -d workspace
	${COMPOSE} exec workspace make prod-build
	cp -r dist/terrasse-front ../docs


prod-build: ## build the project in prod env
	npm ci -P
	npm run build:prod


## into container commands
start: ## start local server
	npm start

build:
	npm run build
