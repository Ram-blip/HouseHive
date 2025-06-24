import jwt from 'jsonwebtoken';


export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({message: "Unauthorized"});
    }

    jwt.verify(token, process.env.JWT_SECRET, async(err, payload) => {
        if(err){
            return res.status(500).json({message: "Internal Server Error"});
        }
        req.userId = payload.userId;
        next();
    })
}