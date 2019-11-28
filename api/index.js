require('dotenv').config();
const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// SERVICE
// const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
// const config = require('./config');

// const Book = require('./models/book');

const HeadRoutes = require('./routes/head');
const testimonialsRoutes = require('./routes/testimonials');
const blogRoutes = require('./routes/blog');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

const robotsOptions = {
    root: path.join(__dirname, "../static"),
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
    }
}

const secretData = [
    {
        title: 'SecretData 1',
        description: 'Plans how to build spaceship'
    },
    {
        title: 'SecretData 2',
        description: 'My secret passwords'
    }
]

const server = express();
server.use(compression());
server.use(bodyParser.json({ type: '*/*' }));
server.use(cors());
server.use(cookieParser());
server.use('/api/v1/head', HeadRoutes);
server.use('/api/v1/testimonials', testimonialsRoutes);
server.use('/api/v1/blog', blogRoutes);
server.use('/api/v1/product', productsRoutes);
server.use('/api/v1/cart', cartRoutes);

server.get('/robots.txt', (req, res) => {
    return res.status(200).sendFile('robots.txt', robotsOptions);
});


// server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
//     return res.json(secretData);
// })



server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({ title: 'Unauthorized', detail: 'Unauthorized Access!' });
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
})
