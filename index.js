const path = require('path');

const mdlinks = () => {
    let ext = path.extname('README.md');
    console.log(ext);

}

mdlinks()

module.exports = mdlinks