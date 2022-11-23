import Joi from "joi"

export const updateGroupSchema = Joi.object({
    groupName: Joi.string().min(2).required(),
    updateFiled: Joi.string().valid('name').required(), //TODO: check if there is a better way + get params from create schema(oneOf() func insted of valid)
    value: Joi.string().required(),
})
