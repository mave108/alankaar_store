var Query = (connection, query, dataPlaceholder) => {
    return new Promise((resole, reject) => {
        connection.query(query, dataPlaceholder, function (error, results, fields) {
            if (error) {
                reject(error);
            } else {
                resole(results, fields);
            }
        });
    });
}

module.exports = Query;