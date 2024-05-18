const configJson = require('./config.json')

let config;
if (configJson.ISTESTSERVER == true) {
    //测试服
    config = {
        serverUrl: '',
        APIURL:''
    }
}
else{
    //正式服
    config = {
        serverUrl: '',
        APIURL:''
    }
}


module.exports = config;