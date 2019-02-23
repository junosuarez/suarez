const boxen = require('boxen')
const lolcat = require('lolcatjs')

const card = `
juno suárez

juno@suarez.email

http://suarez.systems

they/them

npx suarez
`.trim()

lolcat.options.seed = Math.round(Math.random() * 1000)
lolcat.fromString(boxen(card, {padding: 1, margin: 1, borderStyle: 'round', float: 'center'}))
