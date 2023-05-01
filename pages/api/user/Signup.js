import Joi from "joi"
import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from "../../../lib/middlewares/nexConnect"
import validation from "../../../lib/middlewares/validation"
import { signupUser } from "../../../modules/user/user.service"
import {ironConfig} from '../../../lib/middlewares/ironSession'
import  signupSchema  from '../../../modules/user/user.schema'


const signup = createHandler()
    
signup.post(validation({body: signupSchema}), async (req, res) => {
    try{
        const user = await signupUser(req.body)
        req.session.user = {
            id: user._id,
            user: user.user
        }
        await req.session.save()
        res.status(201).json({ ok : true})
    }catch (err) {
        if (err.code === 11000){
            return res.status(400).send({
                code: 11000,
                duplicatedKey: Object.keys(err.keyPattern)[0]
            })
        }
        console.error(err)
        throw err
    }
    
})

export default withIronSessionApiRoute(signup, ironConfig)