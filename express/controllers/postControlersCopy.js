// postControllers.js
import Jobs from "../model/jobsApi.js"


// working with json
//pretend like this is a db


// @desc Get all posts
//@route Get /api/posts
export const getPosts = async (req, res) => {
    const jobs = await Jobs.find()

    res.status(200).json(jobs)

}

// @desc Get single posts
//@route Get /api/posts/ =id
export const getPost = async (req, res, next) => {
    const job = await Jobs.findById(req.params.id)
    console.log(job);
    
    res.status(200).send(job)
}

// @desc Edit posts
//@route Put /api/posts/ =id
export const editPost = async(req, res, next) => {
    const replaceJob = await Jobs.findByIdAndUpdate(req.params.id, req.body , {
        new : true,
        runValidators: true 
     })

    if(!replaceJob){
        res.status(404).json('That does not exist')
        return
    }
    res.status(200).json(replaceJob)
}

// @desc delete a post
//@route delete /api/posts/ =id
export const deletePost =async (req, res, next) => {
    const deleteJob = await Jobs.findByIdAndDelete(req.params.id)

    res.status(204).send()
}

// @desc Create a post
//@route Post /api/posts
export const createPost = async(req, res, next) => {
    try {
        const newJob = await Jobs.create(req.body)
        if (newJob) {
            res.status(201).json(newJob)
        }else{
            res.status(500).json('No jobs')
        }
        console.log(req.body);
        console.log(req.body.title);
        
        
    } catch (error) {
        console.log(error);
        
    }


}