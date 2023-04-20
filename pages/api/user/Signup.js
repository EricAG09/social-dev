import Joi from "joi"
import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from "../../../lib/middlewares/nexConnect"
import validation from "../../../lib/middlewares/validation"
import { signupUser } from "../../../modules/user/user.service"
import {ironConfig} from '../../../lib/middlewares/ironSession'
import {useSchema} from '../../../modules/user/user.schema'


const signup = createHandler()
    
signup.post(validation({body: signupSchema}), async (req, res) => {
    try{
        const user = await signupUser(req.body)
        req.session.user = {
            id: user._id,
            user: user.user
        }
        await req.session.save()
        res.status(201).json(user)
    }catch (err) {
        console.error(err)
        throw err
    }
    
})

export default withIronSessionApiRoute(signup, ironConfig)