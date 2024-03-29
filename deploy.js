
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'chaos priority involve hidden surface awful canal metal rich oil sign feel',
	'https://rinkeby.infura.io/v3/0a7496e587ed478dabfb89a3247f9da3'
);

const web3 = new Web3(provider);

const deploy = async ()=>{
	const accounts = await web3.eth.getAccounts();

	console.log("Attempting to deploy from account", accounts[0])

	console.log("Ethereum blockchain bytecode", bytecode)

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: '0x' + bytecode })
		.send({ gas: '1000000', from: accounts[0] })

	console.log("Contract deployed to",result.options.address);
	return result
};

deploy()
	.then((result)=>console.log(
		"Contract deployed to ", result.options.address))
	.catch((error)=>console.log(error))