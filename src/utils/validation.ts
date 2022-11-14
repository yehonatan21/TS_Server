import Joi from "joi"

export const validateQueryParams = (data: JSON) => {

    const schema = Joi.object({
        firstName: Joi.string().min(4).required(),
        lastName: Joi.string().min(4).required(),
        email: Joi.string().email().required(),
        age: Joi.number().positive().required()
    })

    try {
        schema.validate(data);
        return 'Success'
    }
    catch (err) {
        return err
    }
};
