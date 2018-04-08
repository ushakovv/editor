module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "plugins": [
        "dollar-sign",
        "jquery",
    ],
    "extends": "airbnb",
    "rules": {
        "indent": ["error", 4],
        "max-len": ["error", { "code": 120 }],
        "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
        "no-underscore-dangle": 0,
        "no-tabs": 0,
        "react/prop-types": 0,
        "react/jsx-indent": [2, "spaces"],
        "react/jsx-indent-props": [2, "spaces"],
        "react/self-closing-comp": 2,
        "no-retur-assign": 0,
        "import/prefer-default-export": 0,
        "array-callback-return": 0,
        "no-return-assign": 0,
    },
    "globals": {
        "$": true,
        "tinymce": false,
        "ace": false,
        "Menu": false,
    }
};