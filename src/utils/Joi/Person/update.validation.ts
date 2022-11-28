import Joi from "joi"
import { personParams } from './create.validation'

export const updatePersonSchema = Joi.object({
    personName: Joi.string().min(2).required(),
    updateFiled: Joi.string().valid(...personParams).required(),
    value: Joi.when('updateFiled', {
        is: Joi.string().valid('age'),
        then: Joi.number().required(),
    }).when('updateFiled', {
        is: Joi.string().valid('email'),
        then: Joi.string().email().required(),
    }).when('updateFiled', {
        is: Joi.string().valid('firstName', 'lastName'),
        then: Joi.string().required(),
    }),
})