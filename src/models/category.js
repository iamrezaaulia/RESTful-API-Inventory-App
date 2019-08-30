const conn = require('../configs/db')

module.exports = {
    getCategories: (req, res) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM categories WHERE category LIKE "${req.query.search}"`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    insertCategory: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT categories SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getCategoryById: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM categories WHERE id = ?', id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }  
            })
        })
    },

    updateCategory: (id, data) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE categories SET ? WHERE id = ?', [data, id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                } 
            })
        })
    },

    deleteCategory: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM categories WHERE id = ?', id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}