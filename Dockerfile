# Use Node.js as base image
FROM node:20.11.1-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to WORKDIR
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port that your NestJS application runs on
EXPOSE 3000

# Command to run your NestJS application
CMD ["yarn", "start"]
