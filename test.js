#!/usr/bin/env node
import chalk, { red, blue, yellow, green, bgGrey, bgMagenta, grey } from './index.js'

console.log(red('chalk'))
console.log(blue('chalk'))
console.log(yellow('chalk'))
console.log(green('chalk'))
console.log(grey('chalk'))
console.log(bgGrey('chalk'))
console.log(bgMagenta(chalk.blue('chalk')))
