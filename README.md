# tiny-chalk

A super tiny version of [chalk](https://github.com/chalk/chalk), loading in ~1ms instead of ~10ms for chalk (YMMV)

This is convenient when you are in a controlled environment (that is that you don't need all the `supports-color` detection `chalk` provides)

## Install

```bash
# ES module
npm install tiny-chalk

# CommonJS
npm install tiny-chalk@v2
```

## Usage

```js
import { bgBlack, bold, red } from 'tiny-chalk'
console.log(red('Hello world!'))
console.log(bold(bgBlack(red('Hello world again!'))))
```

## Supported styles and colors

```plaintext
// style
reset
bold
dim
italic
underline
inverse
hidden
strikethrough

// front color
black
red
green
yellow
blue
magenta
cyan
white
grey
redBright
greenBright
yellowBright
blueBright
magentaBright
cyanBright
whiteBright

// back color
bgBlack
bgRed
bgGreen
bgYellow
bgBlue
bgMagenta
bgCyan
bgWhite
bgGrey
bgRedBright
bgGreenBright
bgYellowBright
bgBlueBright
bgMagentaBright
bgCyanBright
bgWhiteBright
```
