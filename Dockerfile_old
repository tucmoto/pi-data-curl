# Use an official Node.js runtime as the base image
FROM node:14 AS builder

# Set the working directory for the backend
WORKDIR /app/backend

# Copy the backend files into the container
COPY ./backend/package*.json ./
COPY ./backend/ ./

# Install backend dependencies
RUN npm install

# Build the backend
RUN npm run build

# Set the working directory for the frontend
WORKDIR /app/frontend

# Copy the frontend files into the container
COPY ./frontend/package*.json ./
COPY ./frontend/ ./

# Install frontend dependencies
RUN npm install

# Build the frontend
RUN npm run build

# Expose backend port
EXPOSE 5000

# Set the working directory for the backend
WORKDIR /app/backend

# Set the command to start the backend server
CMD ["node", "server.js"]
