const soap = require('soap');
const express = require('express');
const fs = require('fs');

const app = express();
const wsdl = fs.readFileSync('calculatorService.wsdl', 'utf8');

const mathService = {
    Calculator: {  // Matches <service name="Calculator">
        CalcPort: { // Matches <portType name="CalcPort">
            multiply: (args) => { // Matches <operation name="multiply">
                console.log('Multiply Request:', args);
                if (!args || typeof args.x === 'undefined' || typeof args.y === 'undefined') {
                    return { error: "Invalid input format" };
                }
                return { result: parseFloat(args.x) * parseFloat(args.y) };
            },
            divide: (args) => { // Matches <operation name="divide">
                console.log('Divide Request:', args);
                if (!args || typeof args.x === 'undefined' || typeof args.y === 'undefined') {
                    return { error: "Invalid input format" };
                }
                if (parseFloat(args.y) === 0) {
                    return { error: "Zero division error" };
                }
                return { result: parseFloat(args.x) / parseFloat(args.y) };
            }
        }
    }
};

app.listen(8000, () => {
    soap.listen(app, '/calc', mathService, wsdl, (err) => {
        if (err) {
            console.error("SOAP Server Error:", err);
        }
    });
    console.log('SOAP server running on http://localhost:8000/calc');
});
