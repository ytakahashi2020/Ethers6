import { JsonRpcProvider, Contract } from "ethers";

async function main() {
  const url = "http://127.0.0.1:8545/";

  const provider = new JsonRpcProvider(url);

  const abi = ["function owner() view returns (address)"];

  const contract = new Contract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    abi,
    provider
  );

  const owner = await contract.owner();
  console.log(owner);
}

main().catch((error) => {
  console.log(error);
});
