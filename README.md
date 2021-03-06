## Aura Contracts

This repo contains solidity files extracted from the core `aura-contracts` repo for public review. All test suite, infrastructure, and deployment scripts are excluded.

Modified files from the `Convex` protocol are in the `convex-platform` submodule. This strategy has been taken to preserve the file formatting to make diff'ing the files easier (See diff [here](https://github.com/aurafinance/convex-platform/pull/23/files?file-filters%5B%5D=.sol&show-deleted-files=false&show-viewed-files=true)).

Contracts that are core to the system and flow of user funds remain in the `convex-platform` subdirectory, with the contracts in `aura-contracts-lite` being either peripheral (`AuraClaimZap`, `AuraStakingProxy`, `AuraVestedEscrow`, `CrvDepositorWrapper`, `ExtraRewardsDistributor`), Aura Specific (`Aura`, `AuraMinter`) or those that required bigger changes (in the case of `AuraLocker`).

original convex code -> new aura versions
  - `convex-platform/contracts/contracts/Cvx.sol` -> `contracts/Aura.sol`
  - `convex-platform/contracts/contracts/ClaimZap.sol` -> `contracts/AuraClaimZap.sol`
  - `convex-platform/contracts/contracts/CvxLocker.sol` -> `contracts/AuraLocker.sol`
  - `convex-platform/contracts/contracts/interfaces/BoringMath.sol` -> `contracts/AuraMath.sol`
  - `convex-platform/contracts/contracts/CvxStakingProxy.sol` -> `contracts/AuraStakingProxy.sol`
  - `convex-platform/contracts/contracts/VestedEscrow.sol` -> `contracts/AuraVestedEscrow.sol`
  - `convex-platform/contracts/contracts/vlCvxExtraRewardDistribution.sol` -> `contracts/ExtraRewardsDistributor.sol`

### Repo setup

```
yarn
git submodule init
git submodule update
```
### Aura Voting
![Aura Voting](https://user-images.githubusercontent.com/97352567/167505092-07ddbd56-df97-4cd9-802f-d9387c21cf55.jpg)
### Booster Pools
![Booster Pools Rewards](https://user-images.githubusercontent.com/97352567/167505101-f1105826-c192-412c-adec-aeb0d64760e6.jpg)
### auraBAL Rewards
![Aura Rewards](https://user-images.githubusercontent.com/97352567/167505104-c785b31c-8afb-4a51-9281-d0151e7646be.jpg)
