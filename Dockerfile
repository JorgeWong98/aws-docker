FROM node:18.13.0

COPY ["package.json", "package-lock.json", "/user/app/"]

WORKDIR /user/app

RUN npm install

COPY [".", "/user/app/"]

CMD ["npx", "nodemon", "index.js"]