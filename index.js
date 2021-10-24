require('dotenv').config()
const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
.then(() => {
    console.log('Database connected')
    server.listen(8080, () => {
    console.log('Server listening from port 8080')
})
})
.catch(err => console.error(err))