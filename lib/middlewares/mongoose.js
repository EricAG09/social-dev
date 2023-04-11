import mongoose from "mongoose"

const MONGOOSE_URI = process.env.MONGOOSE_URI

const databaseMiddleware = async (req, res, next) => {
    try {
        if(!global.mongoose) {
            global.mongoose = await mongoose.connect(MONGOOSE_URI)
            console.log("Aqui")
        }
    } catch (err) {
        console.error(err)
        res.status(400).send('error de dados')
    }
    return next()
}

export default databaseMiddleware
