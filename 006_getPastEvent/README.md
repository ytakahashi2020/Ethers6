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

ex) use https://www.epochconverter.com/

#### 3 deploy the contract

`npx hardhat ignition deploy ./ignition/modules/Lock.ts --network localhost`

### 5 get a signer

#### 1 set url

const url = "http://127.0.0.1:8545/";

#### 2 create a provider

JsonRpcProvider from ethers

#### 3 get a signer

`await provider.getSigner()`

JsonRpcProvider from ethers

### 6 create a contract

#### 1 create a abi

`["function withdraw() public"]`

#### 2 get a contract

`new Contract(target, abi, runner?)

### 7 execute the function

`await contract.withdraw()`

### 8 Query the Event

#### 1 create a abi

`"event Withdrawal(uint amount, uint when)"`

#### 2 query

`contract.queryFilter(event, fromBlock?, toBlock?)`
