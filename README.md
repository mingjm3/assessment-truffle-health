# assessment-truffle-health
This is a simple medical bill upload service built using Node.js and Express. It provides two endpoints for managing medical bills: GET /items and POST /items.

### Installation

``` npm install ```

To start the server, run the following command:

``` npm start ```
The server will start listening on port 3000 by default. You can access the APIs by sending requests to http://localhost:3000/items.

### Endpoints
#### GET /items

This endpoint returns a list of all medical bills. The response will be in JSON format:

``` json
[
    {
        "patientName": "Mike",
        "patientAddress": "Main Street",
        "hospitalName": "The first hospital",
        "dateOfService": "2022-02-01",
        "billAmount": 500
    },
    {
        "patientName": "Karen",
        "patientAddress": "123 street",
        "hospitalName": "The second Hospital",
        "dateOfService": "2022-01-01",
        "billAmount": 10
    }
]
```

#### POST /items
This endpoint creates a new medical bill. You must include a JSON object in the request body with the following properties:

Example request:

``` bash
curl -X POST -H "Content-Type: application/json" -d '{
    "patientName": "Mike",
    "patientAddress": "Main St.",
    "hospitalName": "The first hospital",
    "dateOfService": "2022-02-01",
    "billAmount": 500.0
}' http://localhost:3000/items 
```

The response will be the newly created medical bill in JSON format:

``` json
{
    "patientName": "John Doe",
    "patientAddress": "123 Main St.",
    "hospitalName": "St. Mary's Hospital",
    "dateOfService": "2022-02-11",
    "billAmount": 500.0
}
```

Testing
To run the bash tests, run the following command:
``` ./test.sh   ```