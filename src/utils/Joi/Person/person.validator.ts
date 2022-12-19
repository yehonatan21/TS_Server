import createHttpError from 'http-errors'
import { Response, Request, NextFunction } from 'express';
import * as Validators from './person.index'

export function Validator(validatorName: string) {
    if (!Validators.hasOwnProperty(validatorName))
        throw new Error(`'${validatorName}' validator is not exist`)

    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            await Validators[validatorName].validateAsync(req.body);
            next()
        } catch (err) {
            if (err.isJoi)
                return next(createHttpError(422, `${validatorName} - ${err.message}`))
            // return next(`${validatorName} - ${err.message}`)
            next(createHttpError(500));
        }
    }
}