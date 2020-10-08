# build environment
FROM node:12.13.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3003
EXPOSE 9229

CMD /bin/bash