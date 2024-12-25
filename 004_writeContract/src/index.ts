import { JsonRpcProvider, Contract, Signature, VoidSigner } from "ethers";

async function main() {
  const url = "http://127.0.0.1:8545/";

  const provider = new JsonRpcProvider(url);

  const singer = await provider.getSigner();

  const abi = [
    "function withdraw() public",
    "function owner() view returns (address)",
    "function unlockTime() view returns (uint)",
  ];

  const contract = new Contract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    abi,
    singer
  );

  const tx = await contract.withdraw();

  const receipt = await tx.wait();

  console.log(receipt);

  const other: VoidSigner = new VoidSigner(
    "0x643aA0A61eADCC9Cc202D1915D942d35D005400C"
  );

  const otherSigner: VoidSigner = other.connect(provider);

  await contract.connect(otherSigner).withdraw();
}

main().catch((error) => {
  console.log(error);
});
