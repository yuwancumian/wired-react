#! /user/env/bin node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const libDir = path.resolve(__dirname, '../lib')

const files = fs.readdirSync(libDir).filter((item)=>{ 
    return item !=='styles'&& item !=='index.js' 
});

files.forEach( file=> {
    const cssDest = path.join(libDir, file, 'style', 'css.js');
    const lessDest = path.join(libDir, file, 'style', 'index.js');
    const styleDir = path.join(libDir, file, 'style');
    if (!fs.existsSync(styleDir)) {
        fs.mkdirSync(styleDir);
        
    }
    const cssText = `require('index.css')`;
    const lessText = `require('index.less')`
    fs.writeFileSync(cssDest,cssText);
    fs.writeFileSync(lessDest,lessText);

    console.log(chalk.green('Successed!' ),lessDest + ' was created!');
   
})


