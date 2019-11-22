
const dbPool = require('../db/mysql');

exports.getTestimonials = (req, res) => {

    let Query = `SELECT node__field_testimonials_city.field_testimonials_city_value as city,
    node__field_testimonials_description.field_testimonials_description_value as description,
    node_field_data.title as name 
        FROM node_field_data node_field_data
        LEFT JOIN node__field_testimonials_city  ON node_field_data.nid = node__field_testimonials_city.entity_id 
        LEFT JOIN node__field_testimonials_description  ON node_field_data.nid = node__field_testimonials_description.entity_id 
        WHERE (node_field_data.status = '1') AND (node_field_data.type IN ('testimonials')) 
        ORDER BY node_field_data.nid DESC`;

    dbPool((err, connection) => {
        connection.query(Query, function (error, results, fields) {
            connection.release();
            if (error) {
                return res.status(501).json({});
            } else {
                var testimonials = [];
                results.forEach(element => {
                    testimonials.push(element);
                });
                return res.status(200).json(testimonials);
            }
        });
    });
}

