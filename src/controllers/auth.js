require('dotenv').config()
const modelAuth = require('../models/auth')

var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')

module.exports = {
    register: (req, res) => {
        const salt = bcrypt.genSaltSync(10)
        var hash = bcrypt.hashSync(req.body.password, salt)

        const users = {
            username: req.body.username,
            email: req.body.email,
            password: hash
        }

        modelAuth.register(users)
        .then(result => res.json({
            status: 200,
            error: false,
            message: 'Successfully register user',
            data: {
                username: users.username,
                email: users.email
            }
        }))
        .catch(err => res.json({
              status: 400,
              error: true,
              message: 'User alredy exist!'
            }))
    },

    login: (req, res) => {
        var email = req.body.email
        var hash = req.body.password        

        modelAuth.login(email)
        .then(result => {
            if( result.length > 0 ) {
                bcrypt.compare(hash, result[0].password, (err, result) => {
                    if ( result == true ) {
                        jwt.sign({email:email, password:req.body.password}, process.env.JWT, (err, token) => {
                            res.json({
                                status: 200,
                                error: false,
                                message: 'Successfully login',
                                token: token
                            })
                        })
                    }
                })
            } else {
                res.json({
                    status: 400,
                    error: true,
                    message: 'Your email and password wrong'
                })
            }
        })
        .catch(err => console.log(err))
    },
}

// { expiresIn: '30m' }