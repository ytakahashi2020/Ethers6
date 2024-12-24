### 1 install hardhat

`npm i hardhat`

### 2 create a project

`npx hardhat init <name>`

### 3 run a local node

`npx hardhat node`

### 4 create an outline of a file

#### 1 create a file in src/index.ts

#### 2 create an async main function

### 5 get a signer

#### 1 set url

const url = "http://127.0.0.1:8545/";

#### 2 create a provider

JsonRpcProvider from ethers

#### 3 get a signer

getSigner function

### 6 send a transaction

#### 1 send a transaction

signer.sendTransaction

#### 2 get a receipt

tx.wait()

#### 3 confirm the balance

provider.getBalance  
formatEther
