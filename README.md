## Aura Contracts

This repo contains solidity files extracted from the core `aura-contracts` repo for public review.

All test suite, infrastructure, and deployment scripts are excluded.

### Getting Started

```
yarn
git submodule init
git submodule update
```

### Run the diff

Because some of the files have been renamed with the Aura prefix we can't just share a git link to the diff.
We wrote a smol server to generate the diffs for the convex:aura files as well as the changes we made to the original
convex files. You can run this server with.

```
yarn diff:server
```

And then go to localhost:3000. The diff output ignores changes to comments and just shows the code diff.

### Files in the diff

-   original convex code -> aura changes
    -   `platform/contracts/contracts` -> `convex-platform/contracts/contracts`
-   original convex code -> new aura versions
    -   `contracts/Aura.sol` -> `convex-platform/contracts/contracts/Cvx.sol`
    -   `contracts/AuraBalRewardPool.sol` -> `convex-platform/contracts/contracts/cvxRewardPool.sol`
    -   `contracts/AuraClaimZap.sol` -> `convex-platform/contracts/contracts/ClaimZap.sol`
    -   `contracts/AuraLocker.sol` -> `convex-platform/contracts/contracts/CvxLocker.sol`
    -   `contracts/AuraMath.sol` -> `convex-platform/contracts/contracts/interfaces/BoringMath.sol`
    -   `contracts/AuraMerkleDrop.sol` -> `convex-platform/contracts/contracts/MerkleAirdrop.sol`
    -   `contracts/AuraStakingProxy.sol` -> `convex-platform/contracts/contracts/CvxStakingProxy.sol`
    -   `contracts/AuraVestedEscrow.sol` -> `convex-platform/contracts/contracts/VestedEscrow.sol`
    -   `contracts/ExtraRewardsDistributor.sol` -> `convex-platform/contracts/contracts/vlCvxExtraRewardDistribution.sol`
