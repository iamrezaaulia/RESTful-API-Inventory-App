const conn = require('../configs/db')

module.exports = {
    register: (users) => {
        return new Promise((resolve, reject) => {
            var query = `SELECT * FROM users WHERE email = '${users.email}' `;
            conn.query(query, (err, result) => {
                if (result.length > 0) {
                    reject(err);
                } else {
                    conn.query('INSERT users SET ?', users, (err, result) => {
                        resolve(result);
                    })
                }
            })
        })
    },

    login: (email) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM users WHERE email = '${email}'`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }  
            })
        })
    },
}