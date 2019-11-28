const dbPool = require('../db/mysql');

exports.addToCart = (req, res) => {
    const { nid, user_token } = req.body;

    if (!nid) {
        return res.status(400).json({ error: "node id is mendatory" });
    }
    if (!user_token) {
        return res.status(400).json({ error: "user token is mendatory" });
    }
    let cart = { user_token, nid, created: + new Date() };
    dbPool((err, connection) => {
        connection.query('INSERT INTO cart SET ?', cart, function (error, results, fields) {
            connection.release();
            if (error) {
                return res.status(503).json({ error });
            } else {
                return res.status(200).json({ nid, success: "added to cart successfully" });
            }
        });
    });
}

