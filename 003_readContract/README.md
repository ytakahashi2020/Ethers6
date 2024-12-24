### 1 install hardhat

`npm i hardhat`

### 2 create a project

`npx hardhat init <name>`

### 3 run a local node

`npx hardhat node`

### 4 deploy a contract

#### 1 compile a file

`npx hardhat compile`

#### 2 deploy the contract

`npx hardhat ignition deploy ./ignition/modules/Lock.ts --network localhost`

### 5 get a signer

#### 1 set url

const url = "http://127.0.0.1:8545/";

#### 2 create a provider

JsonRpcProvider from ethers

### 6 create a abi

`["function owner() view returns (address)"]`

### 7 get a contract

new Contract

### 8 read the function