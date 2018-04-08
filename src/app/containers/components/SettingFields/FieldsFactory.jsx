import React from 'react';

import { TextField } from './TextField';
import SliderField from './SliderField';
import ImageField from './ImageField';
import { AlignField } from './AlignField';
import ColorPickerField from './ColorPickerField';
import { BorderField } from './BorderField';
import { TextAlignField } from './TextAlignField';
import ListField from './ListField';
import { NumberField } from './NumberField';
import CodeField from './CodeField';
import SocialField from './SocialField';
import { HiddenField } from './HiddenField';

import { normolizeFieldName } from './_normolizeFieldName';
import { normolizeFieldType } from './_normolizeFieldType';

export const FieldsFactory = (type, val, handler, name, list, editCell, props) => {
    switch (normolizeFieldType(type)) {
    case 'text':
        return <TextField val={val} handler={handler} name={name} text={normolizeFieldName(name)} list={list} />;
    case 'content':
        return <HiddenField val={val} handler={handler} name={name} text={normolizeFieldName(name)} list={list} />;
    case 'number':
        return <NumberField val={val} handler={handler} name={name} text={normolizeFieldName(name)} />;
    case 'file':
        return <ImageField handler={handler} text={normolizeFieldName(name)} name={name} />;
    case 'slider':
        return <SliderField val={val} handler={handler} name={name} text={normolizeFieldName(name)} />;
    case 'align':
        return <AlignField val={val} handler={handler} name={name} text={normolizeFieldName(name)} />;
    case 'color':
        return <ColorPickerField val={val} handler={handler} name={name} text={normolizeFieldName(name)} />;
    case 'border':
        return <BorderField val={val} handler={handler} name={name} text={normolizeFieldName(name)} />;
    case 'textAlign':
        return <TextAlignField val={val} handler={handler} name={name} text={normolizeFieldName(name)} />;
    case 'list':
        return <ListField val={val} handler={handler} name={name} text={normolizeFieldName(name)} list={list} />;
    case 'code':
        return <CodeField val={val} handler={handler} name={name} text={normolizeFieldName(name)} />;
    case 'social':
        return <SocialField
            val={val}
            handler={handler}
            name={name}
            text={normolizeFieldName(name)}
            editCell={editCell}
            {...props}
        />;
    default:
        break;
    }
};
