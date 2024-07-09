FROM maven:3.8.5-openjdk-17-slim AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
WORKDIR /app
COPY --from=build /app/target/server-0.0.1-SNAPSHOT.jar justina.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "justina.jar"]