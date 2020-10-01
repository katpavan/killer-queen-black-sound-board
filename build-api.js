const fs = require('fs')

const dirs = ['lobsterbuster', 'microwave']
const root = 'https://pavan.vc/killer-queen-black-sound-board'

function buildJson (dir) {
  const files = fs.readdirSync(`./${dir}`)
  return ({
    [dir]: files.map(file => `${root}/${dir}/${file}`)
  })
}

const result = dirs.map((dir) => buildJson(dir))

fs.writeFileSync('./api.json', JSON.stringify(result, null, 2))
