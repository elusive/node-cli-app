const execa = require('execa');

module.exports = (cmd) => {
    try {
        var result = execa.shellSync(cmd)
    }
    catch (error) {
        throw new Error(error.message)
    }

    return result
}