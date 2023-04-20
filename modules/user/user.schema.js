import Joi from "joi"

export const signupSchema = Joi.object({
    firstName: Joi.string().required().max(50),
    lastName: Joi.string().required().max(50),
    user: Joi.string().required().max(60),
    email: Joi.string().email({tlds: {allow: false}}).required().max(100),
    password: Joi.string().required()
    .max(50).message('o campo "senha" pode ter no máximo {{#limit}} caracteres.')
    .min(6).message('o campo "senha" pode conter no mínimo {{#limit}} caracteres.')
})