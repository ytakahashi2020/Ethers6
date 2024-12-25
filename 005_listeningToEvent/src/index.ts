import {
  JsonRpcProvider,
  Contract,
  Signature,
  VoidSigner,
  formatEther,
} from "ethers";

async function main() {
  const url = "http://127.0.0.1:8545/";

  const provider = new JsonRpcProvider(url);

  const singer = await provider.getSigner();

  const abi = ["function withdraw() public"];

  const contract = new Contract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    abi,
    singer
  );

  const tx = await contract.withdraw();

  const receipt = await tx.wait();

  console.log(receipt);
}

main().catch((error) => {
  console.log(error);
});
