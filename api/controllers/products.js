
const dbPool = require('../db/mysql');
const fileBaseUrl = require('../config').fileBaseUrl;
exports.getStyles = (req, res) => {
    const { isPromoted, offset, limit, categories } = req.query;

    var search = '';
    search += isPromoted == 1 ? " AND (node_field_data.promote = '1')" : '';
    if (categories) {
        search += " AND (node__field_style_category.field_style_category_target_id IN (" + categories + "))";

    }
    // 
    const offsetQuery = offset ? 'OFFSET ' + offset : '';
    const limitQuery = limit ? 'LIMIT ' + limit : '';
    let Query = `SELECT node_field_data.title AS name, node_field_data.nid AS nid, node__field_style_price.field_style_price_value AS price,
    REPLACE(file_managed.uri, 'public://', '${fileBaseUrl}') AS image, node__field_style_discount.field_style_discount_value AS discount FROM node_field_data
    INNER JOIN node__field_style_category  ON node_field_data.nid = node__field_style_category.entity_id 
    LEFT JOIN node__field_style_price  ON node_field_data.nid = node__field_style_price.entity_id 
    LEFT JOIN node__field_style_discount ON node_field_data.nid = node__field_style_discount.entity_id 
    LEFT JOIN 	node__field_style_main_image  ON node_field_data.nid = 	node__field_style_main_image.entity_id
    INNER JOIN file_managed ON node__field_style_main_image.field_style_main_image_target_id = file_managed.fid
    WHERE (node_field_data.status = '1') AND (node_field_data.type IN ('styles')) ${search} ORDER BY nid DESC ${limitQuery} ${offsetQuery}`;
    dbPool((err, connection) => {
        connection.query(Query, function (error, results, fields) {
            connection.release();
            if (error) {
                return res.status(501).json({});
            } else {
                var blogs = [];
                results.forEach(element => {
                    blogs.push(element);
                });
                return res.status(200).json(blogs);
            }
        });
    });
}

