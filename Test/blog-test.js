import mocha from 'mocha';
import chai from 'chai';
import app from '../app.js';
import chaiHttp from 'chai-http';

chai.should();


chai.use(chaiHttp);


import Post from '../Models/post.js';


const { should, have, expect} = chai;
const { it, describe, beforeEach, afterEach } = mocha;

const testPost = {
    title: 'TEST TITLE',
    body: 'TEST BODY'
}


describe('POST API TEST', () => {

    afterEach(async () => {
        await Post.deleteMany({});
      });


    describe('CRUD A POST', () => {
            
            it('it should display the welcome message', async () => {
                const res = await chai.request(app).get("/api");
                expect(res.status).to.be.equal(201);
                expect(res.body).to.have.property('message', 'Welcome to my blogPost API');

            });

            it('it should CREATE a blog', async () => {
                const res = await chai.request(app).post("/api/post").send(testPost);
                expect(res.status).to.be.equal(201);
                expect(res.body).to.have.property('message', 'Success Created');
                expect(res).to.be.json;
            });
            
            // Get all blog

            it('it should GET all the blog', async () => {
                const res = await chai.request(app).get("/api/post").send(testPost);
                expect(res.status).to.be.equal(201);
                expect(res).to.be.json;
        
        });
            // Get one post
            it('Should get one post', async () => {
                const post = await Post.create(testPost);
                await post.save();
                const res = await chai.request(app).get(`/api/post/${post._id}`);
                expect(res.status).to.be.equal(201);
                expect(res).to.be.json;
        
            });

            //UPDATE a Post
            
            it('Should update a post', async () => {
                const patchPost = {
                    title: 'updated title',
                    body: 'updated body',
                };
                const post = await Post.create(testPost);
                await post.save();
            
                const res = await chai.request(app).patch(`/api/post/${post._id}`).send(patchPost);
                expect(res.status).to.be.equal(201);
                expect(res).to.be.json;
                expect(res.body).to.have.property('message', 'Post Updated Successfully');
            });
            // DELETE a post 
            it('Should get delete one post', async () => {
                const post = await Post.create(testPost);
                await post.save();
                const res = await chai.request(app).delete(`/api/post/${post._id}`);
                expect(res.status).to.be.equal(200);
                expect(res).to.be.json;
                
            });

    });

});