const mysql = require('mysql2/promise');

export default async function database() {
    return await mysql.createConnection({
            host: 'sql.freedb.tech',
            user: 'freedb_proba',
            password: 'Y8aD%tBqS$BT5ex',
            database: 'freedb_emailswaps',
            port: 3306
        })
}