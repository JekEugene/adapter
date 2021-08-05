FROM node:14.17.4

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 27017 5432

CMD [ "npm", "run", "dev" ]