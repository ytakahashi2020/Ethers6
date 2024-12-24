import { formatEther, JsonRpcProvider, JsonRpcSigner } from "ethers";

async function main() {
  const url = "http://127.0.0.1:8545/";

  const provider = new JsonRpcProvider(url);

  const signer: JsonRpcSigner = await provider.getSigner();
  console.log(signer.address);

  const balance: bigint = await provider.getBalance(signer.address);

  const formatBalance: string = formatEther(balance);
  console.log(`balance is ${formatBalance} ETH`);
}

main().catch((error) => {
  console.log(error);
});
