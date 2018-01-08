const serverOperations = require('../out/src/serverOperations');
const config = require('../out/src/config');


// Initialise all required login information
let login = new config.ConnectionInformation();
login.server = '127.0.0.1';
login.port = 11000;
login.principal = 'dopaag';
login.username = 'admin';
login.password = '';


// Only the name of the script is required for download
let myScript = new serverOperations.scriptT('mySimpleScript');


/**
 * Asynchronous function to download the script
 */
async function download(paramLogin, paramScript){
    var retval = await serverOperations.serverSession(paramLogin, [paramScript], serverOperations.downloadScript);
    console.log('finished serverOperations.downloadScript: ' + retval[0].serverCode);
}
download(login, myScript);
