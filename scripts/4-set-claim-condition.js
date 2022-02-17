import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
    "0xD8d1Be66614C27Ec3e021Ddf8ec77808512f4e86",
);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();
        // Specifying conditions
        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 50000,
            maxQuantityPerTransaction: 1,
        });
        // interact with deployed contracty on-chain
        // 0 is the tokenId of the first NFT in the drop
        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log("✅ Successfully set claim condition on bundle drop:", bundleDrop.address);
    } catch (error) {
        console.error("Failed to set claim condition on bundle drop", error);
    }
})()