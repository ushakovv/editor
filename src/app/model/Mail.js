import { BaseModel } from './BaseModel';


export const Mail = {
    send: (options, data, cb) => (
        BaseModel(`${options.rest}/send_test_mail`, 'post', data, cb)
    ),
};
