// Packages
const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const transformImports = require('babel-plugin-transform-imports');
const { ContextExclusionPlugin } = require('webpack');

// Routes
const $views = './src/scripts/Views/'
const $pages = './src/templates/Views/'
const nestedHTML = []

const Config = {
    views: _readFiles($views),
    // pages: _readFiles($pages),
    htmlPlugins: _generateHTMLplugins($pages),
    babelLoader: _babelLoader()
}

function _readFiles(dir) {
    
  const obj = {}

  fs.readdirSync(dir).forEach(filename => {
    
    const name = path.parse(filename).name
    
    // Add extention
    const ext = path.parse(filename).ext
    // End

    const filepath = path.resolve(dir, filename);
    const stat = fs.lstatSync(filepath)
    const isFile = stat.isFile();

    console.log(`${dir}${filename}`)

    if (isFile)  { 
      obj[name.toLowerCase()] = `${dir}${filename}`
    }

  })

  console.log(obj)

  return obj
}

function _generateHTMLplugins(dir, sub = '') {

  let items = []
  
  fs.readdirSync(dir).map(item => {

    // Split names and extension
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    let template = `${dir}${name}.${extension}`
    let filename = name === 'index' ? '' : name + '/'

    if (extension === undefined) {
      nestedHTML.push(_generateHTMLplugins(`${dir}${name}/`, `${name}`))
    } else {
      items.push(new HtmlWebpackPlugin({
        filename: `${sub ? `${sub}/`: ''}${filename}index.html`,
        template: template,
        chunks: [sub !== '' ? sub : name, 'vendors', 'runtime']
      }) )
    }
  })

  // return items
  console.log('NESTED')
  console.log(nestedHTML.flat())

  arr = [...items, ...nestedHTML.flat(1)]
  console.log(arr)
  return arr
}

function _babelLoader() {
  return {
    loader: 'babel-loader',
    query: {
      plugins: [
        [transformImports, {
          'Functions': {
            transform: function(importName, matches) {
              return path.join(__dirname, "../src/scripts/Lib/Functions/") + importName;
            },
            preventFullImport: true
          },
          'Components': {
            transform: function(importName, matches) {
              return path.join(__dirname, "../src/scripts/Lib/Components/") + importName + '/' + importName;
            },
            preventFullImport: false
          }
        }]
      ]
    }
  }
}

module.exports = {
  Config
}