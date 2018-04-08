export const getMaxId = (list) => {
    let maxId = 0;
    list.forEach((val) => {
        if (val.id > maxId) {
            maxId = val.id;
        }
    });
    return ++maxId;
};

export const sortByQueue = (list, order) => {
    for (let x = 0; x < order.length; ++x) {
        list.forEach((val) => {
            if (val.id === order[x]) {
                val.order = x;

                if (val.id === 0) {
                    val.id = getMaxId(list);
                }
            }
        });
    }

    return [...list];
};

export const sortMailsOrder = (list) => {
    list.sort((a, b) => {
        if (a.order >= b.order) {
            return 1;
        }
        return -1;
    });

    return list;
};

export const findById = (list, id, index = false) => {
    for (let x = 0; x < list.length; ++x) {
        if (list[x].id === id) {
            if (index) {
                list[x].value = [...list[x].value];
                return { index: x, item: { ...list[x] } };
            }
            return { ...list[x] };
        }
    }
};

export const findByType = (list, type) => {
    for (let x = 0; x < list.length; ++x) {
        if (list[x].type === type) {
            return x;
        }
    }
};

export const applyNewItem = (list, id) => {
    const { index, item } = findById(list, id, true);

    item.id = getMaxId(list);
    item.order += 1;

    for (let x = index + 1; x < list.length; ++x) {
        list[x].order += 1;
    }
    const immutableArray = [];
    item.value.map((cell) => {
        immutableArray.push({ ...cell });
    });
    item.value = immutableArray;
    list.push(item);

    return [...list];
};

export const isEmptyObject = (obj) => {
    const hasOwnProperty = Object.prototype.hasOwnProperty;

    if (obj == null) return true;

    if (obj.length > 0) {
        return false;
    }

    if (obj.length === 0) {
        return true;
    }

    if (typeof obj !== 'object') return true;

    for (const key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
};

export const normalizeFormData = (formData) => {
    const normalize = decodeURIComponent(formData);
    const fieldArr = normalize.split('&');
    const arrFieldDestruct = {};

    fieldArr.map(field => {
        let splitField = field.split('=');
        if (splitField.length === 3 && splitField[0] === 'videoLink') {
            arrFieldDestruct[splitField[0]] = `${splitField[1]}=${splitField[2]}`;
        }
        else if (splitField[0] === 'code') {
            const code = field.replace(`${splitField[0]}=`, '');
            arrFieldDestruct[splitField[0]] = code;
        } else {
            arrFieldDestruct[splitField[0]] = splitField[1];
        }
    });
    return arrFieldDestruct;
};

export const ucFirst = str => {
    if (!str || typeof str !== 'string') {
        return false;
    }
    return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const strToObj = (socialList) => {
    if (socialList && typeof socialList === 'string') {
        return JSON.parse(socialList);
    }
    return { ...socialList };
};

export const getFrameData = () => {
    const options = {};
    const address = window.location.search.replace(/(\?)/, '');
    if (address) {
        const aSplit = address.split('&');
        aSplit.map((setting) => {
            let val = setting.split('=');
            options[val[0]] = val[1];
        });
        return options;
    }
    return false;
};
