### 1 install hardhat

`npm i hardhat`

### 2 create a project

`npx hardhat init <name>`

### 3 run a local node

`npx hardhat node`

### 4 deploy a contract

#### 1 compile a file

`npx hardhat compile`

#### 2 set timestamp

ex) use https://url-c.com/tc/

#### 3 deploy the contract

`npx hardhat ignition deploy ./ignition/modules/Lock.ts --network localhost`

### 5 get a signer

#### 1 set url

const url = "http://127.0.0.1:8545/";

#### 2 create a provider

JsonRpcProvider from ethers

### 6 create a contract

#### 1 create a abi

`["function withdraw() public","event Withdrawal(uint amount, uint when)"]`

#### 2 get a contract

new Contract

### 7 execute the function

### 8 get events

#### 1 create a filter

contract.filters.Withdrawal

#### 2 get events

await contract.queryFilter
