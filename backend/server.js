const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const pool = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const teacherRoutes = require('./routes/teacherRoutes')

// const sessionRoutes = require('./routes/sessionRoutes.js')
// const courseRoutes = require('./routes/courseRoutes.js')
const { errorHandler } = require('./middleware/errorMiddleware.js')

const app = express()
app.use(express.json())
dotenv.config()


const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('API UP'))

app.use(cors())
app.use('/api/users', userRoutes)
app.use('/api/teachers', teacherRoutes)
// app.use('/api/sessions', sessionRoutes)
// app.use('/api/courses', courseRoutes)

// app.use( (err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode
//     res.status(statusCode)
//     res.json({ message: err.message })
//     next()
// })
app.use(errorHandler)

app.listen(port, () => console.log(`listening on ${port}`))
