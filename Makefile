
-include .env

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
	${COMPOSE} down

prod-deploy: ## run all build and prod publish
prod-deploy:
	${COMPOSE} run workspace make prod-build
	rm -rf docs
	cp -r dist/terrasse-front docs


prod-build: ## build the project in prod env
	npm ci --only=prod
	npm run build:prod


## into container commands
start: ## start local server
	npm start

build:
	npm run build

test:
	npm test
test-watch:
	npm run test:watch
