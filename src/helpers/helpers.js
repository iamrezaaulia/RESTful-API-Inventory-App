require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
    verifyToken: (req, res, next) => {
        // Get auth header value
        const bearerHeader = req.headers['token']
        // check if bearer is undefined
        if (typeof bearerHeader !== 'undefined') {
            // split at the space
            const bearer = bearerHeader.split(' ');
            // Get token from array
            const bearerToken = bearer[1];
            // Set the token
            req.token = bearerToken;
            // Next middleware
            try{
                const decoded = jwt.verify(req.token, process.env.JWT)
                if(decoded) {
                    next()
                } else { 
                    throw new Error(decoded)
                }
            } catch(err){
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: 'Please login'
                })
            }
        } else {
            res.status(403).json({
                status: 403,
                error: false,
                message: 'You dont have permission, please login first'
            });
        }
    }
}
