#  Dockerfile for Vue Front-end

FROM node:latest

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

RUN npm run build

# Exports
EXPOSE 8080

CMD ["npm","run","serve"]