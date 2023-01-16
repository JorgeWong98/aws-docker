FROM node:18.13.0

COPY ["package.json", "package-lock.json", "/user/app/"]

WORKDIR /user/app

RUN npm install

COPY [".", "/user/app/"]

EXPOSE 8000

CMD ["npx", "nodemon", "-L", "index.js"]