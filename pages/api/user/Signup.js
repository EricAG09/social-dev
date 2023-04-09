import Connect from "next-connect"
import Joi from "joi"
import validation from "../../../lib/middlewares/validation"

import {signupUser} from "../../../modules/user/user.service"

const postSchema = Joi.object({
    firstName: Joi.string().required().max(50),
    lastName: Joi.string().required().max(50),
    user: Joi.string().required().max(60),
    email: Joi.string().email().required().max(100),
    password: Joi.string().required().max(50).min(6)
})

const signup = Connect()
    .post(validation({body: postSchema}),(req, res) => {
    signupUser(req.body)
    signupUser()
    res.status(200).json({ teste: "ok" })
})

export default signup