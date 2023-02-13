#!/bin/bash

# Set the API endpoint URL
URL="http://localhost:3000/items"

# Test POST /items
curl -X POST -H "Content-Type: application/json" -d '{"patientName":"Smith", "patientAddress":"The first Street", "hospitalName":"The first hospital", "dateOfService":"2022-01-01", "billAmount":100}' http://localhost:3000/items

# Test GET /items
curl http://localhost:3000/items