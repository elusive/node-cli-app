
FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/ppt


# Bundle app source
COPY . .


# Install app dependencies
# A wildcard is used to ensure both package.json
# and package-lock are copied
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]


RUN npm install  --development --silent \
    && mv node_modules ../ \
    && npm build


# shell so the cli can be tested
ENTRYPOINT ["/bin/ash"]
