# Use node image as base
FROM node:latest

# Set working directory
WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install babel-loader and other necessary dependencies
RUN npm install babel-loader @babel/core @babel/preset-env webpack --save-dev

# Copy the rest of the frontend files
COPY . .

# Run webpack to build the frontend code
RUN npm run build

# Expose port if needed
# EXPOSE 3000

# Command to run the frontend app
# CMD ["npm", "start"]
