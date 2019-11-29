const dbPool = require('../db/mysql');
const Query = require('../db/query');
const fileBaseUrl = require('../config').fileBaseUrl;
exports.addToCart = (req, res) => {
    const { nid, user_token } = req.body;

    if (!nid) {
        return res.status(400).json({ error: "node id is mendatory" });
    }
    if (!user_token) {
        return res.status(400).json({ error: "user token is mendatory" });
    }
    let cart = { user_token, nid, created: + new Date() };
    var cartItemQuery = `SELECT node_field_data.title AS name, node_field_data.nid AS nid, node__field_style_price.field_style_price_value AS price,
    REPLACE(file_managed.uri, 'public://', '${fileBaseUrl}') AS image, node__field_style_discount.field_style_discount_value AS discount FROM node_field_data
    INNER JOIN node__field_style_category  ON node_field_data.nid = node__field_style_category.entity_id 
    LEFT JOIN node__field_style_price  ON node_field_data.nid = node__field_style_price.entity_id 
    LEFT JOIN node__field_style_discount ON node_field_data.nid = node__field_style_discount.entity_id 
    LEFT JOIN 	node__field_style_main_image  ON node_field_data.nid = 	node__field_style_main_image.entity_id
    INNER JOIN file_managed ON node__field_style_main_image.field_style_main_image_target_id = file_managed.fid
    WHERE (node_field_data.status = '1') AND (node_field_data.type IN ('styles')) AND (node_field_data.nid = ${nid}) LIMIT 1`;
    dbPool((err, connection) => {
        Query(connection, 'INSERT INTO cart SET ?', cart)
            .then((results) => {
                return Query(connection, cartItemQuery);
            })
            .then((results) => {
                connection.release();
                return res.status(200).json({ ...results.shift() });
            })
            .catch((err) => {
                connection.release();
                return res.status(503).json({ error });
            })
    });
}

exports.getCart = (req, res) => {
    const { user_token } = req.query;

    if (!user_token) {
        return res.status(400).json({ error: "user token is mendatory" });
    }
    var nids = [];
    dbPool((err, connection) => {
        Query(connection, 'SELECT nid FROM cart WHERE user_token =?', user_token)
            .then((results) => {
                results.forEach(element => {
                    nids.push(element.nid);
                });
                var cartItemQuery = `SELECT DISTINCT node_field_data.title AS name, node_field_data.nid AS nid, node__field_style_price.field_style_price_value AS price,
                                    REPLACE(file_managed.uri, 'public://', '${fileBaseUrl}') AS image, node__field_style_discount.field_style_discount_value AS discount FROM node_field_data
                                    INNER JOIN node__field_style_category  ON node_field_data.nid = node__field_style_category.entity_id 
                                    LEFT JOIN node__field_style_price  ON node_field_data.nid = node__field_style_price.entity_id 
                                    LEFT JOIN node__field_style_discount ON node_field_data.nid = node__field_style_discount.entity_id 
                                    LEFT JOIN 	node__field_style_main_image  ON node_field_data.nid = 	node__field_style_main_image.entity_id
                                    INNER JOIN file_managed ON node__field_style_main_image.field_style_main_image_target_id = file_managed.fid
                                    WHERE (node_field_data.status = '1') AND (node_field_data.type IN ('styles')) AND (node_field_data.nid IN (${[...new Set(nids)]}))`;
                return Query(connection, cartItemQuery);
            })
            .then((results) => {
                connection.release();
                return res.status(200).json({ items: [...results], item_ids: nids });
            })
            .catch((error) => {
                connection.release();
                return res.status(503).json({ error });
            });
    });
}