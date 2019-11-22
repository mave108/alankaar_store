module.exports = {
    DB_URI: process.env.DB_URI,
    NAMESPACE: 'https://filipjerga.herokuapp.com',
    db_config: {
        connectionLimit: 5,
        host: 'localhost',
        user: 'alankaar',
        password: '',
        database: 'alankaar_admin',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    }
}