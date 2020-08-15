FROM openjdk:11.0.8-jre
RUN mkdir app
COPY target/beeclassy-0.0.1-SNAPSHOT.jar /app
WORKDIR /app
ENTRYPOINT ["java","-jar","beeclassy-0.0.1-SNAPSHOT.jar"]
