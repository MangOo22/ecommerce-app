FROM node:18.20.0

WORKDIR /src/app

COPY package.json .

RUN npm install 

EXPOSE 4000

COPY . .

CMD [ "npm", "run" , "start:dev"]