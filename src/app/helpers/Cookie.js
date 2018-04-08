export const Cookie = {
    get: (name) => {
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1');
        const reg = `(?:^|; )${name}=([^;]*)`;
        const matches = document.cookie.match(new RegExp(reg));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    set: (name, val, option) => {
        const options = option || {};
        const d = new Date();
        let updatedCookie = `${name}=${encodeURIComponent(val)}`;
        let expires = options.expires;

        if (typeof expires === 'number' && expires) {
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        for (let propName in options) {
            updatedCookie += `; ${propName}`;
            const propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += `=${propValue}`;
            }
        }
        document.cookie = updatedCookie;
    },
    del: (name) => {
        this.set(name, '', {
            expires: -1,
        });
    },
};
