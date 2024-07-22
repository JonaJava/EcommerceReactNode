const jwt = require("jsonwebtoken")
const TOKEN_SECRET = require  ("../config")


const authRequired  = (req,res,next) => {
  
    const { token } = req.cookies//cookieparser
  
    if(!token)
        return res.status(401).json({message:"No existe token, autorizacion denegada"});
    //verifico
    jwt.verify(token, TOKEN_SECRET,(err, user)=>{
        if(err) return res.status(403).json({message:"token invalido"})
            
            req.user = user//guardo usuario 
            
       next();
    })
}
 
const localVariable = (res,req,next) => { //creo variables
req.app.locals = {
    OTP :null,
    resetSession : false//sesion expirada

}
next()
} 

module.exports = authRequired 