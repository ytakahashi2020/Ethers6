import { JsonRpcProvider, Contract, formatEther, JsonRpcSigner } from "ethers";

async function main() {
  const url = "http://127.0.0.1:8545/";

  const provider = new JsonRpcProvider(url);

  const singer: JsonRpcSigner = await provider.getSigner();

  const abi = ["event Withdrawal(uint amount, uint when)"];

  const contract = new Contract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    abi,
    singer
  );
  // Transferイベントを監視
  contract.on(contract.filters.Withdrawal, (amount, when, event) => {
    const formattedAmount = formatEther(amount); // Ether単位に変換
    console.log(`${when} : ${formattedAmount} ETH`);

    // イベント全体のログを見る
    console.log(event);
  });

  // スクリプトを終了させないための処理
  console.log("Listening for Transfer events...");
  setInterval(() => {}, 1000); //
}

main().catch((error) => {
  console.log(error);
});
