import { Connection, Keypair, PublicKey } from "@solana/web3.js"
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor"
import { IDL, Turbin3Prereq } from "./programs/Turbin3_prereq"
import wallet from "./Turbin3-wallet.json"
import { SYSTEM_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/native/system"

const MPL_CORE_PROGRAM_ID = new PublicKey("CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d")

const nftOwner = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com");

const provider = new AnchorProvider(connection, new Wallet(nftOwner), { commitment: "confirmed" });


const program: Program<Turbin3Prereq> = new Program(IDL, provider);

const account_seeds = [
    Buffer.from("prereqs"),
    nftOwner.publicKey.toBuffer(),
];

const [account_public_key, _account_bump] = PublicKey.findProgramAddressSync(account_seeds, program.programId);
console.log("program.programId: ", program.programId);
console.log("account_public_key: ", account_public_key);

const mintCollection = new PublicKey("5ebsp5RChCGK7ssRZMVMufgVZhd2kFbNaotcZ5UvytN2")

const mintTs = Keypair.generate();

const authority_seeds = [
    Buffer.from("collection"),
    mintCollection.toBuffer()
];

const [authority_public_key, _acc_bump] = PublicKey.findProgramAddressSync(authority_seeds, program.programId);
// // (async () => {
// //     try {
// //         const txhash = await program.methods.initialize("Learnedprawn").accountsPartial({
// //             user: nftOwner.publicKey,
// //             account: account_public_key,
// //             system_program: SYSTEM_PROGRAM_ID,
// //         }).signers([nftOwner]).rpc();
// //
// //         console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
// //     } catch (e) {
// //         console.error(`Initialization Failed: ${e}`);
// //     }
// // })();
//
// (async () => {
//     try {
//         const txhash = await program.methods.submitTs().accountsPartial({
//             user: nftOwner.publicKey,
//             account: account_public_key,
//             mint: mintTs.publicKey,
//             collection: mintCollection,
//             authority: authority_public_key,
//             mpl_core_program: MPL_CORE_PROGRAM_ID,
//             system_program: SYSTEM_PROGRAM_ID,
//         }).signers([nftOwner, mintTs]).rpc();
//         console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
//
//
//     } catch (e) {
//         console.error(`Submit Failded: ${e}`);
//     }
// })();
