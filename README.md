 ## REST and SOAP API Implementation
 
A simple implementation of mathematical operations using REST and SOAP APIs.

## Project Overview

This project implements mathematical operations (addition, subtraction, multiplication, division) using two different architectural styles:
RESTful API using Express.js
SOAP API using Node-SOAP

## Directory Structure

![Screenshot From 2025-02-17 01-03-05](https://github.com/user-attachments/assets/127605a7-f38e-4a24-a51b-d3875e74278c)




## REST API Implementation

Endpoints

POST /add - Addition operation

POST /subtract - Subtraction operation

POST /multiply - Multiplication operation

POST /divide - Division operation

# Sample Request

json

{

    "num1": 5,
    
    "num2": 3
    
}

## SOAP API Implementation
Operations

multiply - Multiplication operation

divide - Division operation

## Testing

Start REST server:

```
cd REST
npm install
node server.js
```

## Start SOAP server:

```
cd SOAP
npm install
node server.js
```

## Test SOAP client

```
node client.js
```


## Technologies Used

Node.js

Express.js

Node-SOAP

Body-parser

## REST API RESPONSE
![c2](https://github.com/user-attachments/assets/ac3bc51d-5733-4feb-8cf0-7ee8f3f5ab8c)

## SOAP API RESPONSE
![c3](https://github.com/user-attachments/assets/f96ded98-75de-4223-8423-eea359d8a15f) ![c4](https://github.com/user-attachments/assets/75e61aba-eca7-45ea-a2f3-d9a571577825)





## Author
[Manoj Paudel]


