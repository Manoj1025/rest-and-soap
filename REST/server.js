const express = require('express')
const app = express()
app.use(express.json())

app.post('/add', (req, res) => {
    let x = req.body.num1
    let y = req.body.num2
    res.json({ answer: x + y })
})

app.post('/subtract', (req, res) => {
    let x = req.body.num1
    let y = req.body.num2
    res.json({ answer: x - y })
})

app.post('/multiply', (req, res) => {
    let x = req.body.num1
    let y = req.body.num2
    res.json({ answer: x * y })
})

app.post('/divide', (req, res) => {
    let x = req.body.num1
    let y = req.body.num2
    if(y == 0) {
        res.json({ error: "Can't divide by zero" })
        return
    }
    res.json({ answer: x / y })
})

app.listen(3000, () => console.log('Running on 3000'))

