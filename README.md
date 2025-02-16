 ## REST and SOAP API Implementation
 
A simple implementation of mathematical operations using REST and SOAP APIs.

## Project Overview

This project implements mathematical operations (addition, subtraction, multiplication, division) using two different architectural styles:
RESTful API using Express.js
SOAP API using Node-SOAP

## Directory Structure
![Screenshot From 2025-02-17 01-03-05](https://github.com/user-attachments/assets/cf2e49d8-568f-49dc-a9ed-46c2c04a54d0)




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

## Author
[Manoj Paudel]


