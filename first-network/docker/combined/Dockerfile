# DockerfilHLF SDK server
FROM amd64/ubuntu:latest
RUN apt-get update
RUN apt-get install nodejs npm git -y
RUN npm install -g npm@5.5.1

# install the web app
RUN mkdir -p /server/webApp
WORKDIR /server/webApp
COPY webApp /server/webApp/
# COPY ConnectionProfile.yml /server/webApp/
# ADD channel-artifacts /server/webApp/config
# ADD crypto-config /server/webApp/crypto-config
RUN npm install

EXPOSE 3000

WORKDIR /server/webApp

CMD ["npm", "start"]