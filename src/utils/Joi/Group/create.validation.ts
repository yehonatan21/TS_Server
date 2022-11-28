import Joi from "joi"

export const createGroupSchema = Joi.object({
    groupName: Joi.string().min(2).required(),
})

export const groupParams = ['name']