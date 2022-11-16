import Joi from "joi"

export const createPersonSchema = Joi.object({
    firstName: Joi.string().min(4).required(),
    lastName: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    age: Joi.number().positive().required()
})