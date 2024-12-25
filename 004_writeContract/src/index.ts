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

  console.log("waiting for 5 seconds...");
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const otherSigner = await provider.getSigner(
    "0x2546BcD3c84621e976D8185a91A922aE77ECEc30"
  );

  await contract
    .connect(otherSigner)
    .withdraw()
    .catch((error) => {
      console.log(error.shortMessage);
    });
}

main().catch((error) => {
  console.log(error);
});
