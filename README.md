# Creating Ethereum raw transactions 

Full article guide on [Etherscan API docs.](https://docs.etherscan.io/tutorials/read-write-contract-using-abis)

### Prerequisites 

* [Node.js](https://nodejs.org/en/) installed 
* A valid Etherscan API key 

### Getting Started 

1. Clone this repository using `git clone https://github.com/0xV4L3NT1N3/ethereum-raw-transactions.git`

2. In a terminal, run `npm install` to install the required dependencies

3. In `transaction.js`, replace the `privatekey` variable with your own private key. 

You can generate a private key from [MyEtherWallet](https://www.myetherwallet.com/wallet/create) or import one from a wallet such as [Metamask](https://metamask.io/)

> Remember, private keys are sensitive information, do not share them with your important accounts. 

4. Run this code using the command `node transaction.js`

### Dependencies 

Thanks to [@ricmoo](https://github.com/ricmoo) for the [ethers.js](https://github.com/ethers-io/ethers.js/) library 🙌 
