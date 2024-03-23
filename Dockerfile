# Use Node.js as base image
FROM node:20.9.0

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to WORKDIR
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port that your NestJS application runs on
EXPOSE 3000

# Command to run your NestJS application
CMD ["yarn", "start:dev"]