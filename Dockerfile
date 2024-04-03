FROM node:21

RUN npm install -g @angular/cli

WORKDIR /
RUN mkdir angular-app
WORKDIR /angular-app

CMD npm install \
    && ng serve --configuration=development --host 0.0.0.0 --port 4200

EXPOSE 4200