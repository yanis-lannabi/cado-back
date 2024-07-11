import express from 'express';

import eventController from '../controllers/event.controller.js';
import authenticate from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/events', eventController.getEvents);
router.post('/events', eventController.createEvent);
router.post('/create-event', authenticate, eventController.createEventWithParticipants);

router.get('/events/:id', eventController.getOneEvent);
router.put('/events/:id', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEvent);



export default router;