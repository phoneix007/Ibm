const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const pool = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const teacherRoutes = require('./routes/teacherRoutes')
const studentRoutes = require('./routes/studentRoutes')


const { errorHandler } = require('./middleware/errorMiddleware.js')

const app = express()
app.use(express.json())
dotenv.config()


const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('API UP'))

app.use(cors())
app.use('/api/users', userRoutes)
app.use('/api/teachers', teacherRoutes)
app.use('/api/student', studentRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`listening on ${port}`))
