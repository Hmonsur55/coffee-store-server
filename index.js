const express = require('express')
const cors = require('cors')
const app = express()
const port =process.env.PORT || 5000

// middleweare
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('coffee store is running')
})

app.listen(port, () => {
    console.log(`coffee store is running on port : ${port}`)
})