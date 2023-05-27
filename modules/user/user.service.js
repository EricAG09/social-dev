import { hashPassword, comparePassword } from "../../utils/Bcrypt"

import User from "./user.model"

export const signupUser = async (body) =>  {
    try{
        const user = {
            ...body,
            password: hashPassword(body.password)
        }
        const dbUser = await User.create(user)
        return dbUser
    }catch (err) {
        throw err
    }
}
export const login = async (body) => {
    console.log(body)
    try{
        const user = await User.findOne({
            $or: [
                {email: body.userOrEmail},
                {user: body.userOrEmail}
            ]
        }) 
        console.log(user)
        
        if(!user) throw new Error('not found')
        const passwordIsCorrect = comparePassword(body.password, user.password)
        if(!passwordIsCorrect) throw new Error('password incorrect')
        
        
        return user
    }catch (err) {
        console.error(err)
        throw err
    }
}