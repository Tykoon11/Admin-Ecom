# Use the official Node.js 14 image as the base image
FROM node:14.17.0-alpine 

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the Next.js app files to the container
COPY . .

# Expose the desired ports for the Next.js app and Express API server
EXPOSE 3000
EXPOSE 5000

# Start the Next.js app and Express server simultaneously
CMD npm run dev & npm run start
