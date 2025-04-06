// posts.js

import express from 'express'
import { title } from 'process'
import {getPosts, getPost, editPost, deletePost, createPost} from '../controllers/postControlers.js'
const router = express.Router()



//adding a route + get/post request
// router.get('/', (req, res)=>{
//     res.send('<h1> Hello World! </h1>') //can parse html, onjects

// })

router.get('/about', (req, res)=>{
    res.send({message : 'Hello'}) 

})



router.get('/' ,getPosts )

router.get('/:id' , getPost )

//new post
router.post('/', createPost );


router.put('/:id', editPost )

router.delete('/:id', deletePost );

 
  

export default router