FROM node:alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --silent
RUN npm install -g serve

COPY . /app
RUN npm run build

CMD ["serve", "-s", "build", "-l", "80"]

EXPOSE 80