import Joi from "joi"

export const getGroupSchema = Joi.object({
    groupName: Joi.string().min(2).required(),
})