# Stage 1: Build the Angular app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the Angular project files
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built Angular app from the build stage
COPY --from=build /app/dist/[YOUR_PROJECT_NAME] /usr/share/nginx/html

# Copy custom nginx configuration
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
