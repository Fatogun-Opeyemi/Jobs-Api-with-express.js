// Server.js
import express from 'express'
import path from 'path'
const port = process.env.PORT || 8080 //declare --env-file=.env in dev in package.json
import cors from 'cors'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
import notFound from './middleware/notFound.js'
import { fileURLToPath } from 'url'
import connectDB from './config/db.js'

connectDB()

import posts from './routes/posts.js'

//get directory name
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname);


const app = express();
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//logger middle
app.use(logger)


app.use('/api/posts', posts)

app.use(express.static(path.join(__dirname, 'public')))

//catch all
app.use(notFound)

//err middleware
app.use(errorHandler)

//to serve html file
//we use res.sendFile which takes an absolute path
//we can use the path in 2 ways- importing path and the express static middleware
// app.get('/html', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public' , 'index.html'))
// } )
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
//   });
//express static middleware
//declaring one of our folders to be static- we can just go to the url and itll just work
//we'll set public to be our static folder
//the middleware takes the location of the static folder, and 




app.listen(port, ()=> console.log(`server running on port ${port}`))


//middleware- a func that runs between incoming req and outgoing res