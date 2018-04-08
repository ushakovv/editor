import axios from 'axios';
import { Cookie } from '../helpers/Cookie';


export const BaseModel = (uri, methodName, formData, cb, test = false) => (
    axios({
        url: !test ? uri : 'http://api.mailmaker.loc/1.php',
        method: methodName,
        data: formData,
        withCredentials: true,
        config: {
            headers: {
                Cookie: `token=${Cookie.get('token')}`,
                'Content-Type': 'multipart/form-data',
            },
        },
    }).then((resp) => {
        if (resp.data.errors) {
            console.error(resp.data.errors);
        }
        if (resp.data && cb) {
            cb(resp);
        }
    }).catch((err) => {
        console.error(err);
    })
);
