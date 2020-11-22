import express from 'express';
// import path from 'path';

import { UserController } from './controllers/UserController';
import { SubscriptionController } from './controllers/SubscriptionController';

// Services' controllers
import { CoachingServiceController } from './controllers/services/CoachingServiceController';
import { ProfileUpdateServiceController } from './controllers/services/ProfileUpdateServiceController';
import { ResumeServiceController } from './controllers/services/ResumeServiceController';

const router = express.Router();

const userController = new UserController();
const subscriptionController = new SubscriptionController();
const coachingServiceController = new CoachingServiceController();
const profileUpdateServiceController = new ProfileUpdateServiceController();
const resumeServiceController = new ResumeServiceController();

router.get('/', () => 'Reached \/');

router.get('/user/:userId', userController.getUserDetails);
router.get('/user/subscriptions/:userId', userController.getUserSubscriptions);
router.get('/subscription', subscriptionController.listSubscriptions);

router.get('/services/coaching', coachingServiceController.getServiceData);
router.get('/services/profileUpdate', profileUpdateServiceController.getServiceData);
router.get('/services/resume', resumeServiceController.getServiceData);

export default router;
