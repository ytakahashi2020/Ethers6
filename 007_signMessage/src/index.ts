import { JsonRpcProvider, verifyMessage } from "ethers";

async function main() {
  const url = "http://127.0.0.1:8545/";

  const provider = new JsonRpcProvider(url);

  const signer = await provider.getSigner();

  const message = "hello world";

  // Signing the message
  const signedMessage = await signer.signMessage(message);

  // Validating a message; notice the address matches the signer
  const verifiedSigner = verifyMessage(message, signedMessage);

  console.log(`verified signer is ${verifiedSigner}`);

  console.log(`signer is ${signer.address}`);
}

main().catch((error) => {
  console.log(error);
});
