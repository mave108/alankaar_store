
const dbPool = require('../db/mysql');
const fileBaseUrl = require('../config').fileBaseUrl;
exports.getBlogData = (req, res) => {
    const { isPromoted, offset, limit } = req.query;
    const search = isPromoted == 1 ? " AND (node_field_data.promote = '1')" : '';
    const offsetQuery = offset ? 'OFFSET ' + offset : '';
    const limitQuery = limit ? 'LIMIT ' + limit : '';
    let Query = `SELECT node_field_data.created AS date, node_field_data.nid AS nid, node_field_data.title AS title, 
    REPLACE(file_managed.uri, 'public://', '${fileBaseUrl}') as image,
    node__field_blog_display_author_name.field_blog_display_author_name_value as author, 
    node__field_blog_short_description.field_blog_short_description_value as description FROM node_field_data 
    LEFT JOIN node__field_blog_short_description ON node_field_data.nid = node__field_blog_short_description.entity_id 
    LEFT JOIN node__field_blog_display_author_name ON node_field_data.nid = node__field_blog_display_author_name.entity_id 
    LEFT JOIN node__field_blog_small_image ON node_field_data.nid = node__field_blog_small_image.entity_id 
    LEFT JOIN file_managed ON node__field_blog_small_image.field_blog_small_image_target_id = file_managed.fid 
    WHERE (node_field_data.status = '1') AND (node_field_data.type IN ('blog')) ${search} 
    ORDER BY node_field_data.nid DESC ${limitQuery} ${offsetQuery}`;

    console.log("cookie", req.cookies);
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

