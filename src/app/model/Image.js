import { BaseModel } from './BaseModel';


export const Image = {
    upload: (options, data, cb) => (
        BaseModel(`${options.rest}/image`, 'post', data, cb)
    ),
};
