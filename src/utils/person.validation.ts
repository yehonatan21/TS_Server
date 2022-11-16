import Joi from "joi"

export function validateQueryParams(data: JSON) {

    const personSchema = Joi.object({
        firstName: Joi.string().min(4).required(),
        lastName: Joi.string().min(4).required(),
        email: Joi.string().email().required(),
        age: Joi.number().positive().required()
    })

    const { error } = personSchema.validate(data)
    if (error) {
        return error.message
    }
};
