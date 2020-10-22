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

postRouter.route('/').get(welcome).post(create).get(findPosts);
postRouter.route("/:id").delete(deletePost).get(getPost).patch(updatePost);



export default postRouter;

