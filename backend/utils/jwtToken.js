// Create token and saving in cookie
const sendToken = (user, statusCode, res)=>{
    const token = user.getJWTToken();

    const options = {
        expire: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 100
        ),
        httpOnly:true,

    }
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    })
}

module.exports = sendToken;