import express from 'express';

import {
    welcome,
    create,
    findPosts,
    getPost,
    updatePost,
    deletePost
} from '../Controllers/postController.js'

const postRouter = express.Router();

// postRouter.post("/create", create);
// postRouter.get("/getPost", getPost);
// postRouter.get("/allPost",  findPosts);

postRouter.route('/').get(welcome);
postRouter.route('/post').post(create).get(findPosts);
postRouter.route("/post/:id").delete(deletePost).get(getPost).patch(updatePost);



export default postRouter;

