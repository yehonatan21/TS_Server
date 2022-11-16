import Joi from "joi"

export const createGroupSchema = Joi.object({
    name: Joi.string().min(4).required(),
    
})