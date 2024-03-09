# Use node image as base
FROM node:latest

# Set working directory
WORKDIR /app/frontend

<<<<<<< HEAD
# Copy package.json and package-lock.json
COPY package*.json ./
=======
# Copy the backend files into the container
COPY backend/package*.json ./
COPY backend/ ./
>>>>>>> 3d272deb4bb39aa99f3246dec616c2fed34d1d7c

# Install dependencies
RUN npm install

<<<<<<< HEAD
# Install babel-loader and other necessary dependencies
RUN npm install babel-loader @babel/core @babel/preset-env webpack --save-dev
=======
# Install Babel and necessary presets/plugins
RUN npm install @babel/core @babel/cli @babel/preset-env
>>>>>>> 3d272deb4bb39aa99f3246dec616c2fed34d1d7c

<<<<<<< HEAD
# Copy the rest of the frontend files
COPY . .
=======
# Build the backend using Babel, excluding node_modules
RUN npx babel . -d dist --ignore "node_modules"

# Set the working directory for the frontend
WORKDIR /app/frontend
>>>>>>> 3d272deb4bb39aa99f3246dec616c2fed34d1d7c

<<<<<<< HEAD
# Run webpack to build the frontend code
=======
# Copy the frontend files into the container
COPY frontend/package*.json ./
COPY frontend/ ./

# Install frontend dependencies
RUN npm install

# Install webpack globally
RUN npm install -g webpack webpack-cli

# Build the frontend
>>>>>>> 3d272deb4bb39aa99f3246dec616c2fed34d1d7c
RUN npm run build

# Expose port if needed
# EXPOSE 3000

<<<<<<< HEAD
# Command to run the frontend app
# CMD ["npm", "start"]
=======
# Set the working directory to the backend
WORKDIR /app/backend
>>>>>>> 3d272deb4bb39aa99f3246dec616c2fed34d1d7c

<<<<<<< HEAD
=======
# Set the command to start the backend server
CMD ["node", "server.js"]


>>>>>>> 3d272deb4bb39aa99f3246dec616c2fed34d1d7c