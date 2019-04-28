const execa = require('execa');

module.exports = (cmd) => {
    try {
    	cmd = "./bin/" + cmd;
        var result = execa.sync(cmd);
        console.log(result);
    }
    catch (error) {
        throw new Error(error.message);
    }

    return result;
}