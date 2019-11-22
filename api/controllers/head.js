
const dbPool = require('../db/mysql');

exports.getHeadData = (req, res) => {

    let Query = `SELECT node_field_data.nid AS nid,node_field_data.title AS title,node__field_meta_description.field_meta_description_value AS description,node__field_meta_keywords.field_meta_keywords_value AS keywords FROM node_field_data node_field_data 
    LEFT JOIN node__field_meta_page_url node__field_meta_page_url ON node_field_data.nid = node__field_meta_page_url.entity_id 
    LEFT JOIN node__field_meta_description node__field_meta_description ON node_field_data.nid = node__field_meta_description.entity_id 
    LEFT JOIN node__field_meta_keywords node__field_meta_keywords ON node_field_data.nid = node__field_meta_keywords.entity_id 
    AND node__field_meta_page_url.deleted = '0'
    WHERE (node_field_data.status = '1') AND (node_field_data.type IN ('page_metas')) AND (node__field_meta_page_url.field_meta_page_url_value = '${req.path}') LIMIT 1 OFFSET 0`;

    dbPool((err, connection) => {
        connection.query(Query, function (error, results, fields) {
            connection.release();
            if (error) {
                return res.status(501).json({});
            } else {
                return res.status(200).json({
                    title: results[0].title,
                    description: results[0].description,
                    keywords: results[0].keywords,
                    meta: [
                    ]
                });
            }
        });
    });
}

