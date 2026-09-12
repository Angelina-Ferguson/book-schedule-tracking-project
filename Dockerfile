FROM node:22-alpine

WORKDIR /src/app

COPY package.json ./
RUN npm install 
COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]


#research dockerfile best practices