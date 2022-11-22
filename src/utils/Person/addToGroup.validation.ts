import Joi from "joi"

export const addPersonToGroupSchema = Joi.object({
    personName: Joi.string().min(2).required(),
    groupName: Joi.string().min(2).required(),
})