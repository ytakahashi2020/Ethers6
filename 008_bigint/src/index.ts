import {
  formatEther,
  JsonRpcProvider,
  JsonRpcSigner,
  parseEther,
  TransactionReceipt,
  TransactionResponse,
} from "ethers";

async function main() {
  const url = "http://127.0.0.1:8545/";

  const provider = new JsonRpcProvider(url);

  const signer: JsonRpcSigner = await provider.getSigner();

  // in Ethers 5, we used BigNumber
  const value1: bigint = 100000000000000000000n;

  const value2: bigint = 300000000n;

  const value: bigint = value1 + value2;

  const tx: TransactionResponse = await signer.sendTransaction({
    to: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    value: value,
  });

  const receipt: TransactionReceipt | null = await tx.wait();

  console.log(receipt);

  const balance: bigint = await provider.getBalance(signer.address);

  console.log(`balance is ${formatEther(balance)} ETH`);
}

main().catch((err) => {
  console.log(err);
});
