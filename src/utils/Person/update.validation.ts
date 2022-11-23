import Joi from "joi"

export const updatePersonSchema = Joi.object({
    personName: Joi.string().min(2).required(),
    updateFiled: Joi.string().valid('firstName', 'lastName', 'email', 'age').required(), //TODO: check if there is a better way + get params from create schema
    value: Joi.string().required(),
})