import { generateWallet, generateSecretKey } from '@stacks/wallet-sdk';
import { getStxAddress } from '@stacks/wallet-sdk';
import { TransactionVersion } from '@stacks/transactions';



const password = 'password';
const secretKey = generateSecretKey();

const wallet = await generateWallet({
  secretKey,
  password,
});

const account = wallet.accounts[0];

const testnetAddress = getStxAddress({ account, transactionVersion: TransactionVersion.Testnet });
const mainnetAddress = getStxAddress({ account, transactionVersion: TransactionVersion.Mainnet });

console.log(password)
console.log(secretKey)
console.log(wallet)

console.log("testnetAddress:")
console.log(testnetAddress)

console.log("mainnetAddress:")
console.log(mainnetAddress)