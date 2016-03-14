# tman
Task Manager application

An Spring Boot + Angular 2 todo application

Steps to run
	1.- Execute 'npm install' in a shell pointing to 'tman/web/src/main/webapp'
		It should install node_modules and typings dependencies
	2.- Run 'mvn clean install' in tman (Root) directory
	3.- Launch rest service executing 'mvn spring-boot:run' in tman/backend
	4.- Launch application UI executing 'mvn spring-boot:run' in tman/web

	After that you should have 2 Tomcat running
		- Rest service: 	http://localhost:8081/resources/tasks
		- Application UI: 	http://localhost:8080/tasks