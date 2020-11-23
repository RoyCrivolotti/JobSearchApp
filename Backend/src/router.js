const express = require('express');
// const path = require('path');

const userController = require('./controllers/UserController');
const subscriptionController = require('./controllers/SubscriptionController');

// Services' controllers
const coachingServiceController = require('./controllers/services/CoachingServiceController');
const profileUpdateServiceController = require('./controllers/services/ProfileUpdateServiceController');
const resumeServiceController = require('./controllers/services/ResumeServiceController');
const generalServiceController = require('./controllers/services/GeneralServiceController');

const router = express.Router();

router.get('/', (req, res, next) => res.send('Reached the API'));

router.get('/user/:userId', userController.getUserDetails);
router.get('/user/subscriptions/:userId', userController.getUserSubscriptions);
router.get('/subscription', subscriptionController.listSubscriptions);

router.get('/services/coaching', coachingServiceController.getServiceData);
router.get('/services/profileUpdate', profileUpdateServiceController.getServiceData);
router.get('/services/resume', resumeServiceController.getServiceData);
router.get('/services/all/get', generalServiceController.getAllServicesData);

module.exports = router;
