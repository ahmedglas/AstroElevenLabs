#!/bin/bash

echo "Starting the application"
echo "Pulling the latest code from Git..."
git pull
echo "Starting the Docker containers..."
docker-compose up -d

echo "Done."
