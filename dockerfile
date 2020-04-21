
FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/ppt

# Install app dependencies
# A wildcard is used to ensure both package.json 
# and package-lock are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
