// we nned to read to solidity contract in order to compile
// but we cannot do -> require('./contracts/index.sol')
// because js will try to execute it , and it will throw an error 
// as it index.sol is in solidity so we need to read the index.sol file first.

const path = require('path'); //it will be used to create a path from compile.js to index.sol
// path modules guarantee cross platform compatibility
const fs = require('fs');
const solc = require('solc');//solidity compiler
const inboxPath = path.resolve(__dirname , 'contracts' ,'Inbox.sol');
// __dirname gives the path to base directory then arguments are give in '' separated by , for destinamtion file/folder

const source = fs.readFileSync(inboxPath , 'utf8');
//console.log(solc.compile(source,1)); //here 1 is no. of contracts being compiled
// after compiling the contract we need other files to use the compiled file so we export this

module.exports = solc.compile(source, 1).contracts[':Inbox'];

// console.log(solc.compile(source,1));