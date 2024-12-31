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

#### 0 create a main function

`async function main() {}`

#### 1 set url

const url = "http://127.0.0.1:8545/";

#### 2 create a provider

JsonRpcProvider from ethers

### 6 create a abi

`["function withdraw() public"]`

### 7 get a contract

`new Contract(target, abi, runner?)`

### 8 execute the function

#### 1 execute

`await contract.withdraw()`

#### 2 get receipt

`await result.awit()`

### 9 execute the function in other signer

#### 1 wait a little

`await new Promise((resolve) => setTimeout(resolve), 5_000));`

#### 2 get another signer

`await provider.getSigner();`

#### 2 create a new Contract

`new Contract(target, abi, runner?)`

#### 3 execute

`await contract.withdraw()`

#### 4 use connect

`await contract.connect(otherSigner)`
