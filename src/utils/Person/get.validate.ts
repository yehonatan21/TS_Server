import Joi from "joi"

export const getPersonSchema = Joi.object({
    firstName: Joi.string().min(4).required(),
})