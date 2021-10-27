const ethers = require('ethers');
const fetch = require('node-fetch');

async function main() {

  // defining the wallet private key
  let privatekey = 'CE75F1A875F2DB7FB064F5DBD302B0C77FFEAA18CC4C314167A5111A04F79AFA';
  let wallet = new ethers.Wallet(privatekey);

  // print the wallet address
  console.log('Using wallet address ' + wallet.address);

  let transaction = {
    to: '0xa238b6008Bc2FBd9E386A5d4784511980cE504Cd',
    value: ethers.utils.parseEther('1'),
    gasLimit: '21000',
    maxPriorityFeePerGas: ethers.utils.parseUnits('5', 'gwei'),
    maxFeePerGas: ethers.utils.parseUnits('20', 'gwei'),
    nonce: 1,
    type: 2,
    chainId: 3
  };

  // sign and serialize the transaction 
  let rawTransaction = await wallet.signTransaction(transaction).then(ethers.utils.serializeTransaction(transaction));

  // print the raw transaction hash
  console.log('Raw txhash string ' + rawTransaction);

  // pass the raw transaction hash to the "eth_sendRawTransaction" endpoint
  let gethProxy = await fetch(`https://api-ropsten.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex=${rawTransaction}&apikey=YourApiKeyToken`);
  let response = await gethProxy.json();

  // print the API response  
  console.log(response);

}

main();