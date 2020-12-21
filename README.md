# element-ui-theme-generator

## Change variables

```scss
// src/common/var.scss

$--color-primary: red;
```

## Generate

```sh
$ gulp
```

## Add to project

- Copy the lib folder to your project, example: [project]/src/styles/element-theme/lib

- Install babel-plugin-component

```sh
$ npm install --save-dev babel-plugin-component
```

- Add plugin to babel.config.js

```js
// babe.config.js
module.exports = {
  plugins: [
    // ... else
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibrary: {
          // the theme lib root dictionary, need ~
          name: '~src/styles/element-theme/lib',
          path: '[module].css',
          base: true
        }
      }
    ]
  ]
};
```
