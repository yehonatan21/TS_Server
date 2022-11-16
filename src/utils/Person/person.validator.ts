import createHttpError from 'http-errors'
import { Response, Request, NextFunction } from 'express';
import * as Validators from './person.index'


export function Validator(validatorName) {
    if (!Validators.hasOwnProperty(validatorName))
        throw new Error(`'${validatorName}' validator is not exist`)

    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const validated = await Validators[validatorName].validateAsync(req.query)
            req.body = validated
            next()
        } catch (err) {
            if (err.isJoi)
                return next(createHttpError(422, { message: err.message }))
            next(createHttpError(500))
        }
    }
}