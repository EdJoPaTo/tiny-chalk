// Copied from https://github.com/chalk/chalk
const styleMap = {
	// style
  reset: [0, 0],
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

	// front color
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  grey: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],

	// back color
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgGrey: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
}

const chalk = Object.keys(styleMap).reduce((index, styleName) => {
  index[styleName] = function (content) {
    return `\u001B[${styleMap[styleName][0]}m${content}\u001B[${styleMap[styleName][1]}m`
  }
  return index
}, {})

export default chalk

export const reset = chalk.reset
export const bold = chalk.bold
export const dim = chalk.dim
export const italic = chalk.italic
export const underline = chalk.underline
export const inverse = chalk.inverse
export const hidden = chalk.hidden
export const strikethrough = chalk.strikethrough

// front color
export const black = chalk.black
export const red = chalk.red
export const green = chalk.green
export const yellow = chalk.yellow
export const blue = chalk.blue
export const magenta = chalk.magenta
export const cyan = chalk.cyan
export const white = chalk.white
export const grey = chalk.grey
export const redBright = chalk.redBright
export const greenBright = chalk.greenBright
export const yellowBright = chalk.yellowBright
export const blueBright = chalk.blueBright
export const magentaBright = chalk.magentaBright
export const cyanBright = chalk.cyanBright
export const whiteBright = chalk.whiteBright

// back color
export const bgBlack = chalk.bgBlack
export const bgRed = chalk.bgRed
export const bgGreen = chalk.bgGreen
export const bgYellow = chalk.bgYellow
export const bgBlue = chalk.bgBlue
export const bgMagenta = chalk.bgMagenta
export const bgCyan = chalk.bgCyan
export const bgWhite = chalk.bgWhite
export const bgGrey = chalk.bgGrey
export const bgRedBright = chalk.bgRedBright
export const bgGreenBright = chalk.bgGreenBright
export const bgYellowBright = chalk.bgYellowBright
export const bgBlueBright = chalk.bgBlueBright
export const bgMagentaBright = chalk.bgMagentaBright
export const bgCyanBright = chalk.bgCyanBright
export const bgWhiteBright = chalk.bgWhiteBright
