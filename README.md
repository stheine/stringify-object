# @stheine/stringify-object

<!-- toc -->

- [Purpose](#purpose)
- [Reference](#reference)
  * [Install](#install)
  * [Usage](#usage)
  * [API](#api)
    + [stringifyObject(input, [options])](#stringifyobjectinput-options)
      - [input](#input)
      - [options](#options)
        * [indent](#indent)
        * [singleQuotes](#singlequotes)
        * [filter(obj, prop)](#filterobj-prop)
        * [inlineCharacterLimit](#inlinecharacterlimit)
        * [joinLines](#joinlines)
  * [License](#license)

<!-- tocstop -->

# Purpose

> Stringify an object/array like JSON.stringify just without all the double-quotes

Useful for when you want to get the string representation of an object in a formatted way.

It also handles circular references and lets you specify quote type.

The fork was created to add the new option `joinLines`.
See the [https://github.com/yeoman/stringify-object/pull/39](discussion).

# Reference

This module is forked from [https://github.com/yeoman/stringify-object](stringify-object).
Thanks for the original work!

## Install

```
$ npm install --save @stheine/stringify-object
```

## Usage

```js
const stringifyObject = require('@stheine/stringify-object');

const obj = {
	foo: 'bar',
	'arr': [1, 2, 3],
	nested: { hello: "world" }
};

const pretty = stringifyObject(obj, {
	indent: '  ',
	singleQuotes: false
});

console.log(pretty);
/*
{
	foo: "bar",
	arr: [
		1,
		2,
		3
	],
	nested: {
		hello: "world"
	}
}
*/
```


## API

### stringifyObject(input, [options])

Circular references will be replaced with `"[Circular]"`.

#### input

Type: `Object` `Array`

#### options

##### indent

Type: `string`<br>
Default: `'\t'`

Preferred indentation.

##### singleQuotes

Type: `boolean`<br>
Default: `true`

Set to false to get double-quoted strings.

##### filter(obj, prop)

Type: `Function`

Expected to return a `boolean` of whether to keep the object.

##### inlineCharacterLimit

Type: `number`

When set, will inline values up to `inlineCharacterLimit` length for the sake of more terse output.

For example, given the example at the top of the README:

```js
const obj = {
	foo: 'bar',
	'arr': [1, 2, 3],
	nested: { hello: "world" }
};

const pretty = stringifyObject(obj, {
	indent: '  ',
	singleQuotes: false,
	inlineCharacterLimit: 12
});

console.log(pretty);
/*
{
	foo: "bar",
	arr: [1, 2, 3],
	nested: {
		hello: "world"
	}
}
*/
```

As you can see, `arr` was printed as a one-liner because its string was shorter than 12 characters.

##### joinLines

Type: `boolean`<br>
Default: `true`

Set to false to not join lines having a linebreak character.

```js
console.log(stringifyObject('line1\nline2'));
/*
'line1\nline2'
*/

console.log(stringifyObject('line1\nline2', {joinLines: false}));
/*
'line1
line2'
*/
```

## License

[BSD license](http://opensource.org/licenses/bsd-license.php) © Yeoman Team
