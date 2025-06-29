import { Keypair } from "@solana/web3.js"
import bs58 from "bs58";

const phantomPrivateKey = "<YOUR_PRIVATE_KEY_HERE>";;
const secretKey = new Uint8Array(bs58.decode(phantomPrivateKey));
console.log("Secret key", secretKey);

const uint8array = [
    156, 139, 210, 95, 249, 110, 236, 19, 222, 40, 167,
    131, 52, 185, 156, 228, 0, 157, 42, 97, 101, 43,
    65, 138, 102, 54, 114, 172, 242, 184, 214, 43, 62,
    11, 79, 233, 135, 61, 200, 67, 101, 204, 254, 234,
    157, 206, 127, 147, 28, 70, 18, 58, 136, 233, 191,
    113, 212, 85, 149, 251, 151, 239, 156, 141
]

console.log("phantom key: ", bs58.encode(uint8array));


