import { BaseModel } from './BaseModel';


export const Template = {
    save: (data, options, cb) => (
        BaseModel(`${options.rest}/template`, 'put', JSON.stringify({ id: options.id, structure: data }), cb)
    ),
    download: (options) => (
        BaseModel(`${options.rest}/template_archive?template_id=${options.id}`, 'get')
    ),
    get: (options, cb) => (
        BaseModel(`${options.rest}/template?id=${options.id}`, 'get', null, cb)
    ),
    preview: (options, data, cb) => (
        BaseModel(`${options.rest}/template_preview`, 'post', `structure=${data}`, cb)
    ),
};
