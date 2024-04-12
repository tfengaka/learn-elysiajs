#!make
include .env

PROJECT=elysia_tutor

dev: 
	docker-compose -p ${PROJECT} up -d ${SERVICE}

down: 
	docker-compose -p ${PROJECT} down ${SERVICE}

restart:
	docker-compose -p ${PROJECT} restart ${SERVICE}

clean: 
	docker-compose -p ${PROJECT} down --remove-orphans -v

%:
	@echo "Done"