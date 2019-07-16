const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const  { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'your metamask mnemonic here',
    'https://rinkeby.infura.io/v3/aea3778c75fe4ac7bc71b96e1f770d6b'
);
// if we want to deploy using remix , Web3 provider, run ganache at 
// localhost:8545/7545
// const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

// this is deploying a contract using infura(rinkeby)
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from contract' , accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:'ox' +  bytecode, arguments:['hi there']})
        .send({from : accounts[0]});

    console.log('contract deployed to  ' ,result.options.address);
};
deploy();