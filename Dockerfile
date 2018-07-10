FROM starefossen/ruby-node:latest

# Create app directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# COPY package.json /usr/src/app/package.json

RUN gem install sass && npm install -g grunt-cli typescript && npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .
# COPY . /usr/src/app

EXPOSE 3011
# USER node
CMD [ "grunt" ]
# CMD [ "bash" ]
# CMD [ "npm", "start" ]
