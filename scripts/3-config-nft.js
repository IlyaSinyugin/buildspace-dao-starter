import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0xD8d1Be66614C27Ec3e021Ddf8ec77808512f4e86",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Membership Card",
                description: "This NFT serves as a confirmation of membership for ESO.",
                image: readFileSync("eso.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("Failed to create the new NFT", error);
    }
})()