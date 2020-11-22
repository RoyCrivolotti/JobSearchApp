const express = require('express');
// const path = require('path');

const userController = require('./controllers/UserController');
const subscriptionController = require('./controllers/SubscriptionController');

// Services' controllers
const coachingServiceController = require('./controllers/services/CoachingServiceController');
const profileUpdateServiceController = require('./controllers/services/ProfileUpdateServiceController');
const resumeServiceController = require('./controllers/services/ResumeServiceController');

const router = express.Router();

router.get('/', () => 'Reached /');

router.get('/user/:userId', userController.getUserDetails);
router.get('/user/subscriptions/:userId', userController.getUserSubscriptions);
router.get('/subscription', subscriptionController.listSubscriptions);

router.get('/services/coaching', coachingServiceController.getServiceData);
router.get('/services/profileUpdate', profileUpdateServiceController.getServiceData);
router.get('/services/resume', resumeServiceController.getServiceData);

module.exports = router;
