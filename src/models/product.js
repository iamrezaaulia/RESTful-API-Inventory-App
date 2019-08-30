const conn = require('../configs/db')

module.exports = {
    getProducts: (req, res) => {
        return new Promise((resolve, reject) => {
            const sortBy    = req.query.sortBy||'products.id'
            const sort      = req.query.sort ||'ASC'
            const limit     = parseInt(req.query.limit) || 5
            const page      = (parseInt(req.query.page) - 1) * limit || 0
            const search    = '%'+req.query.search+'%'
            const query     = `SELECT products.id, products.name, categories.category, products.quantity FROM products JOIN categories ON products.categories_id = categories.id`
            
            if (req.query.search) {
                conn.query(query + ` WHERE name LIKE "${search}" ORDER BY ${sortBy} ${sort} LIMIT ${page}, ${limit}`, (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(err)
                    }
                })
            } else {
                conn.query(query + ` ORDER BY ${sortBy} ${sort} LIMIT ${page}, ${limit}`, (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(err)
                    }
                })
            }
        })
    },

    insertProduct: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT products SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getProductById: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM products WHERE id = ?', id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }  
            })
        })
    },

    updateProduct: (id, data) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE products SET ? WHERE id = ?', [data, id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                } 
            })
        })
    },

    addReduceProduct: (id, data) => {
        return new Promise((resolve, reject) => {
            if ( data.action === 'add' ) {
                var query = `UPDATE products SET quantity = quantity+${data.qty} WHERE id = ?` 
            } else if ( data.action === 'reduce' ) {
                var query = `UPDATE products SET quantity = quantity-${data.qty} WHERE id = ? AND quantity >= ${data.qty}` 
            }

            conn.query(query, [id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                } 
            })
        })
    },

    deleteProduct: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM products WHERE id = ?', id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },    
}