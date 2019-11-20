COMPOSE=docker-compose

help: ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

copy-env: ## copy env-exemple in .env
	cp env-exemple .env

bash: ## Login to container
	$(COMPOSE) exec workspace bash

dev-start: ## start containers
	${COMPOSE} up -d

start: ## start and log
start: dev-start bash

dev-stop: ## stop containers
	${COMPOSE} down
