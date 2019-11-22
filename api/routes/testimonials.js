const express = require('express');
const router = express.Router();

const testimonialsCtrl = require('../controllers/testimonial');


router.get('', testimonialsCtrl.getTestimonials);

// router.get('/me', authService.checkJWT,
//     authService.checkRole('siteOwner'),
//     blogCtrl.getUserBlogs);

// router.get('/:id', blogCtrl.getBlogById);

// router.get('/s/:slug', blogCtrl.getBlogBySlug);

// router.post('', authService.checkJWT,
//     authService.checkRole('siteOwner'),
//     blogCtrl.createBlog);

// router.patch('/:id', authService.checkJWT,
//     authService.checkRole('siteOwner'),
//     blogCtrl.updateBlog);

// router.delete('/:id', authService.checkJWT,
//     authService.checkRole('siteOwner'),
//     blogCtrl.deleteBlog);

module.exports = router;
