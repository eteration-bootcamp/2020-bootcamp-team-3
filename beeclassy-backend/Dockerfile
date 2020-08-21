FROM maven:3-jdk-11
ADD . /eteration
WORKDIR /eteration 
RUN ls -l 
RUN mvn clean install 
FROM openjdk:11-jdk
COPY --from=0 "/eteration/target/beeclassy.login-0.0.1-SNAPSHOT.jar" app.jar
CMD [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]