FROM node:18.16.1

RUN apt-get update && apt-get upgrade -y


RUN useradd --create-home devuser
WORKDIR /home/devuser

USER devuser

ENTRYPOINT ["/bin/bash"]