const jwt = require('jsonwebtoken')



function authmiddleware(req,res,next){
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.send('token yoxdur!')
    }
    jwt.verify(token,"CAVID", async (err, data) => {
        if (err) {
            return res.send('token yanlisdir!')
        } else {
            console.log(data);
            if (data.role !== 'admin') {
                return res.status(403).send('admin deyilsen!')
            } else {
                next()
            }
        }
    })

}
module.exports = authmiddleware