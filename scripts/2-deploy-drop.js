import { ethers } from "ethers";
import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xD8963B2d472671D0D5486ce788e9c20b6D42b15d");

(async () => {
    try {
        const bundleDropModule = await sdk.deployer.deployEditionDrop({
            name: "ESODao",
            description: "A DAO for members of Eurasian Student Organization",
            image: readFileSync("eso.png"),
            // We are not charging people for the drop of ERC-1155 collection NFT 
            // so we'll pass the proceeds from sales to 0x0 address
            // #TODO: change to the organization's address later on 
            primary_sale_recipient: AddressZero,
        });

        // returns the address of our contract, used to initialize the contract on 3rd web sdk
        const editionDrop = sdk.getEditionDrop(editionDropAddress);

        // metadata of contract
        const metadata = await editionDrop.metadata.get();

        console.log(
            "✅ Successfully deployed bundleDrop module, address: ",
            bundleDropModule.address,
        );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()