import mocha from 'mocha';
import chai from 'chai';
import app from '../app.js';
import chaiHttp from 'chai-http';

chai.should();


chai.use(chaiHttp);


import Post from '../Models/post.js';


const { should, have} = chai;
const { it, describe, beforeEach, afterEach  } = mocha;

const testPost = {
    PostId: 1,
    title: 'TEST TITLE',
    body: 'TEST BODY'
}


describe('POST API TEST', () => {
    afterEach( () => {
        Post.deleteMany({}, (err) => {
            done();
        });
    }); 
    

    
    describe('CRUD A POST', () => {

            // CREATE a Post
            it('it should POST a Blog ', () => {
                chai.request(app)
                    .post("/api/post")
                    .send(testPost)
                    .end((err, res) => {
                        res.should.have.status(201);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Success Created');
                        res.body.book.should.have.property('title');
                        res.body.book.should.have.property('body');
                        done();
                    });
            });
            
            // GET all Post
            it('It should GET all the Blog', () =>{
                chai.request(app)
                    .get(`api/post`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eql(0);
                    done();
                    })
            });

            // GET a post using ID
         
            it('It should get one blog', () => {
                const postId = 1;
                chai.request(app)
                    .get(`/api/post/${postId}`)
                    .end((err,res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                    done();    
                })
            });

            // UPDATE a Post


            it('It should update a post', () => {
                const postId = 1
                const newpost = {
                    title: "Hello world",
                    body: "Test Hello world"
                }

                chai.request(app)
                    .patch(`/api/post/${postId}`)
                    .send(newpost)
                    .end((err,res) => {
                        res.should.have.status(201);
                        res.body.should.have.property('message').eql('Post Updated Successfully');
                        res.body.book.should.have.property('title');
                        res.body.book.should.have.property('body');
                    done();
                    })
            })
            // DELETE a post 

            it('It should delete a post', () => {
                const postId = 1;
                chai.request(app)
                    .patch(`/api/post/${postId}`)
                    .end((err,res) => {
                        res.should.have.status(201);
                        res.body.should.have.property('message').eql('Deleted Post Successfully');
                        res.body.book.should.be('object');
                        
                    done();
                    })
            })


            


        });
    

    



    

});