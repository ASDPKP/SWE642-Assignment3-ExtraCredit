# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the entire app to the working directory
COPY . .

# Build the Angular app
RUN ng build

# Expose the port the app runs on
EXPOSE 4200

# Command to run the application
CMD ["ng", "serve", "--host", "0.0.0.0"]
