import Joi from "joi"

export const getGroupSchema = Joi.object({
    name: Joi.string().min(4).required(),
})