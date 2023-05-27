
import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from "../../../lib/middlewares/nexConnect"
import validation from "../../../lib/middlewares/validation"
import {login} from "../../../modules/user/user.service"
import {ironConfig} from '../../../lib/middlewares/ironSession'
import  {loginSchema}  from '../../../modules/user/user.schema'

const handler = createHandler()

handler.post(validation({body: loginSchema}), async (req, res) => {
    try{
        const user = await login(req.body)
        req.session.user = {
            id: user._id,
            user: user.user
        }
        await req.session.save();
        res.send({ok: true})
    }catch (err) {
        console.error(err)
        throw err
    }    
})

export default withIronSessionApiRoute(handler, ironConfig)