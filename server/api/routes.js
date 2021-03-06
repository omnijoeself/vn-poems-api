import express from 'express';

//Authentication
import authenticate from './middleware/authenticate';

// Controller Imports,,
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import poemController from './controllers/poemController';
import commentController from './controllers/commentController';

//POLICIES
import userControllerPolicy from './policies/userControllerPolicy';


const routes = express();

// Basic routes..
routes.get('/', basicController.get);

// User routes..
routes.post('/users',  userControllerPolicy.post, userController.post);
routes.get('/users/me', authenticate , userController.get);
routes.post('/users/login', userController.login);
routes.delete('/users/me/token', authenticate, userController.delete);
routes.patch('/users/me', authenticate, userController.patch);

// Poem Routes..
routes.post('/poems', authenticate, poemController.post);
routes.get('/poems', poemController.getAll);
routes.get('/poems/:poemId', poemController.getOne);
routes.patch('/poems/:poemId', authenticate, poemController.patch);
routes.put('/poems/:poemId/upvote', authenticate, poemController.put);
routes.put('/poems/:poemId/downvote', authenticate, poemController.putDownVote);
routes.delete('/poems/:poemId', authenticate, poemController.delete);

// Comment Routes
routes.post('/poems/comments', authenticate, commentController.postAll);
routes.post('/poems/:poemId/comments', authenticate, commentController.post);
routes.post('/poems/:poemId/comments/:commentId', authenticate, commentController.postComment);
routes.get('/comments', commentController.getAll);
routes.get('/comments/:commentId', commentController.getOne);
routes.patch('/comments/:commentId', authenticate, commentController.patch);
routes.delete('/comments/:commentId', authenticate, commentController.delete);





export default routes;