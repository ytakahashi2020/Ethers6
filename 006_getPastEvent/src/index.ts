import { JsonRpcProvider, Contract } from "ethers";

async function main() {
  const url = "http://127.0.0.1:8545/";

  const provider = new JsonRpcProvider(url);

  const singer = await provider.getSigner();

  const abi = [
    "function withdraw() public",
    "event Withdrawal(uint amount, uint when)",
  ];

  const contract = new Contract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    abi,
    singer
  );

  const tx = await contract.withdraw();

  const receipt = await tx.wait();

  console.log(receipt);

  const filter = contract.filters.Withdrawal;
  const event = await contract.queryFilter(filter, 1);

  console.log(event[0]);
}

main().catch((error) => {
  console.log(error);
});
