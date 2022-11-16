import Joi from "joi"

export function validateQueryParams(data: JSON) {

    const groupSchema = Joi.object({
        name: Joi.string().min(2).required(),
    })

    const { error } = groupSchema.validate(data)
    if (error) {
        return error.message
    }
};
