import Post from "../models/post.js";

export const welcome = async (req, res) =>{
    res.status(201).json({
        message: "Welcome to my blogPost API"
    })
};

// Create a Post 
export const create = async (req, res) => {
    const { title, body } = req.body
    
    try {
        
        const post = await Post.create({
            title,
            imageUrl: "",
            body,
            commentsCount: 0,
            views: 0,
            time: Date.now(),
        });
    res.status(201).json({
        message: "Success Created",
        post
    })
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Post not created"
        })
    }
};


// Get all Post 
export const findPosts = async(req,res) => {
    try {
        const posts = await Post.find(req.params);
        res.status(201).json({
            messsage: "Successfully Found the Posts",
            posts,
        });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Sorry nothing found",
        })

    }
};

// Get  a specific Post using ID
export const getPost = async(req, res) => {
    try {
        const aPost = await Post.findById(req.params.id);
        res.status(201).json({
            message: "Post Found ",aPost
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "Post not found"
        })

    }
};

// Update a Post 

export const updatePost = async(req, res) => {
    try {
        const findPost = await Post.findOne({_id:req.params.id});
        if (!findPost){
            res.status(500).json({
                message: "Unfortunately no Post Found"
            })
        }
        

        const updatePost = await findPost.updateOne({...req.body});
        res.status(201).json({
            message: "Post Updated Successfully",
            updatePost
        })
    }
    catch (error){
        console.log(error);
        res.status(500).json({
            message: "unable to update the post",
            update
        })
    }
};

//Delete Post 

export const deletePost = async(req, res) => {
    try {
        const findPost = await Post.findOne({_id: req.params.id});
        if (!findPost){
            res.status(404).json({
                message: "Unfortunately no Post Found"
            })
        }

        await findPost.deleteOne();
        res.status(200).json({
            message: "Deleted Post Successfully"
        })

    }
    catch (error){
        console.log(error);
        res.status(500).json({
            message: "Can't delete the Post"
        })
    }


}
