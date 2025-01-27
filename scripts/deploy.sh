#!/bin/bash

# Step 1: Build Docker image
docker build -t stillapk/your-angular-app:latest .

# Step 2: Log in to Docker Hub (if you're not logged in)
docker login

# Step 3: Push Docker image to Docker Hub
docker push stillapk/your-angular-app:latest

# Step 4: Run the Docker container locally for testing
docker run -p 80:80 stillapk/your-angular-app:latest
