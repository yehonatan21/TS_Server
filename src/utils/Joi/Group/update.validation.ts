import Joi from "joi"
import { groupParams } from './create.validation'

export const updateGroupSchema = Joi.object({
    groupName: Joi.string().min(2).required(),
    updateFiled: Joi.string().valid(...groupParams).required(),
    value: Joi.when('updateFiled', {
        is: Joi.string().valid('groupName'),
        then: Joi.string().required(),
    })
})