import joi from "joi"

import createHandler from "../../../lib/middlewares/nexConnect"
import validation from "../../../lib/middlewares/validation"
import {login} from "../../../modules/user/user.service"

const loginSchema = joi.object({
    userOremail: joi.string(). required(),
    password: joi.string(). required()
})

const handler = createHandler()

handler.post(validation({body: loginSchema}), async (req, res) => {
    try{
        const user = await login(req.body)
        res.send(user)
    }catch (err) {
        console.error(err)
        throw err
    }    
})

export default handler