import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

// Importing and configuring .env file 
import dotenv from "dotenv";
dotenv.config();

// Checks to see if .env is working 
if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY == "") {
    console.log("🛑Private key not found.")
}

if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL == "") {
    console.log("Alchemy API URL not found.")
}

if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS == "") {
    console.log("🛑Wallet Address not found.")
}

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        // Wallet private key
        process.env.PRIVATE_KEY,
        // RPC URL, in this case alchemy API URL is used
        ethers.getDefaultProvider(process.env.ALCHEMY_API_URL),
    ),
);

(async () => {
    try {
        const apps = await sdk.getApps();
        console.log("Your app address is:", apps[0].address);
    } catch (err) {
        console.error("Failed to get apps from the sdk", err);
        process.exit(1);
    }
})()

// exporting the initialized SDK to use in other scripts 
export default sdk; 