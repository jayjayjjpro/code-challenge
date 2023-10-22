# Market Module

## Overview

The Market Module is a core component of our dApp, enabling the creation, storage, and retrieval of financial market details on our blockchain.

## Features

- **Market Creation:** Allows users to create new financial markets with specific attributes and data.
- **Market Storage:** Securely stores all the details of the financial markets on-chain.
- **Market Retrieval:** Provides efficient ways to retrieve specific market data or details.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Command Summary](#command-summary)
- [Architecture](#architecture)
- [Data Structures](#data-structures)
- [Testing](#testing)
- [Areas of Improvement](#areas-of-improvement)
- [Contribute](#contribute)
- [License](#license)

## Prerequisites

Before you get started with the Market Module, ensure you have the following software tools installed:

### Docker

Docker is instrumental for our exercises and deployments.

- **Installation:** Head to the [Install Docker Engine](https://www.docker.com/get-started) page.
- **Learning:** If Docker is unfamiliar, consider this [quick introduction](https://docs.docker.com/get-started/overview/).

### Go

Go is vital for developing with the Cosmos SDK.

- **Installation:** Visit the [Go download and install](https://golang.org/doc/install) page. The latest version is recommended.

### Node.js

Node.js is necessary for development with CosmJS.

- **Installation:** Install from the [Node.js download](https://nodejs.org/en/download/) page. Opt for the latest version.

### Rust

Some components are built with Rust.

- **Installation:** Follow the guide on the [Rust Install](https://www.rust-lang.org/learn/get-started) page.
- **Version Check:** Use `rustc --version`.
- **Update:** If you've installed Rust before, update with `rustup update`.
- **Test Installation:** Verify with `cargo version`.

### Visual Studio Code

VS Code is recommended for both Cosmos SDK and CosmJS.

- **Installation:** Get it from the [Visual Studio Code install](https://code.visualstudio.com/download) page. Choose the version suitable for your operating system.

> **Note:** For organizational clarity, create a dedicated project folder for all your Cosmos exercises.

## Quickstart

1.  Clone the repository
```shell
git clone https://github.com/Switcheo/code-challenge.git
```
2. Before working with the Market Module, ensure your environment is properly set up. If you're new to Cosmos SDK, you might want to refer to the [official documentation](https://cosmos.network/) for guidance.
3. Initializing the Market Module
```shell
<your-binary-name> init <your-node-name> --chain-id=<your-chain-id>
```
4. Configuration: Ensure the configuration is set correctly for your network. Edit the ~/.<your-binary-name>/config/config.toml and ~/.<your-binary-name>/config/app.toml files if needed.
5. Refer to the [Command Summary](#command-summary) to create a market
6. Further Exploration: Dive deeper into the module's functionality by referring to the comprehensive Module Documentation.


### Command Summary
#### Query Commands

| Action        | Command                                     | Short Description                                            |
|---------------|--------------------------------------------|--------------------------------------------------------------|
| Show Market ✅  | `<your-binary-name> query market market [name]` | Retrieve details of a specific market using its name        |
| List Markets ✅  | `<your-binary-name> query market markets`      | List all markets                                             |
| Get Trading Fees (To be Implemented🚧)      | `<your-binary-name> query market get-trading-fees`  |  Retrieve Trading Fees |
| Fee Tiers by Market ID (To be Implemented🚧) | `<your-binary-name> query market fee-tiers-market-id` | Retrieve Fee Tiers by Market ID |
| Fee Tiers by Market Type (To be Implemented🚧) | `<your-binary-name> query market fee-tiers-market-type` | Retrieve Fee Tiers by Market Type |
| Stake Equivalence All (To be Implemented🚧)  | `<your-binary-name> query market stake-equivalence-all` | Retrieve Stake Equivalence ) |
| Fee Structure All  (To be Implemented🚧)    | `<your-binary-name> query market fee-structure-all`  | Retrieve for Fee Structure ) |

#### Transaction Commands

| Action       | Format                                                                                       | Short Description   |
|--------------|----------------------------------------------------------------------------------------------|----------------------|
| Create Market ✅| `<your-binary-name> tx market create-market [market-type] [base] [quote] [base-usd-price] [quote-usd-price] [index-oracle-id] [expiry-time]`| Creates a new market|
| Update Market (To be Implemented🚧)               | `<your-binary-name> tx market update-market [args]`                     | Updates a market                            |
| Set Perpetuals Funding Interval (To be Implemented🚧)  | `<your-binary-name> tx market set-perpetuals-funding-interval [args]`  | Set Perpetuals Funding Interval |
| Add Fee Tier (To be Implemented🚧)                  | `<your-binary-name> tx market add-fee-tier [args]`                      | Adds a fee tier                             |
| Remove Fee Tier (To be Implemented🚧)                | `<your-binary-name> tx market remove-fee-tier [args]`                   | Removes a fee tier                          |
| Update Fee Tier (To be Implemented🚧)               | `<your-binary-name> tx market update-fee-tier [args]`                   | Updates a fee tier                          |
| Set Stake Equivalence (To be Implemented🚧)          | `<your-binary-name> tx market set-stake-equivalence [args]`             | Set Stake Equivalence     |
| Update All Pool Trading Fees (To be Implemented🚧)   | `<your-binary-name> tx market update-all-pool-trading-fees [args]`      | Updates all pool trading fees               |

> **Note**: Please replace `<your-binary-name>` with the actual binary name of your application.

## Architecture

Describe the high-level architecture of the Market Module, its place within the dApp, and how it interacts with other modules or services.

- **Components:** List out the main components of the module.
- **Data Flow:** A brief description or diagram showing how data flows through the module.

## Data Structures

### Market

| Field                        | Type              | Example Value                                 | Description                       |
|------------------------------|-------------------|-----------------------------------------------|-----------------------------------|
| Name                         | string            | `"swth_eth"`                                  | Name of the market                |
| DisplayName                  | string            | `"SWTH_ETH"`                                  | Display name of the market        |
| Description                  | string            | `"SWTH/ETH spot market"`                      | Description of the market         |
| MarketType                   | string            | `"spot"`                                      | Type of the market                |
| Base                         | string            | `"swth"`                                      | Base currency                     |
| Quote                        | string            | `"eth"`                                       | Quote currency                    |
| BasePrecision                | int               | `8`                                           | Precision of the base currency    |
| QuotePrecision               | int               | `18`                                          | Precision of the quote currency   |
| LotSize                      | sdk.Int           | `10000000000` (represents 100 SWTH)           | Lot size for the market           |
| TickSize                     | sdk.Dec           | `1000` (represents 0.0000001)                 | Tick size for the market          |
| MinQuantity                  | sdk.Int           | `20000000000` (represents 200 SWTH)           | Minimum quantity for trading      |
| RiskStepSize                 | sdk.Int           | `0`                                           | Risk step size                    |
| InitialMarginBase            | sdk.Dec           | `1` (represents 1x)                           | Initial margin base               |
| InitialMarginStep            | sdk.Dec           | `0`                                           | Initial margin step               |
| MaintenanceMarginRatio       | sdk.Dec           | `0`                                           | Maintenance margin ratio          |
| MaxLiquidationOrderTicket    | sdk.Int           | `0`                                           | Max liquidation order ticket      |
| MaxLiquidationOrderDuration  | int               | `0`                                           | Max liquidation order duration    |
| ImpactSize                   | sdk.Int           | `0`                                           | Impact size                       |
| MarkPriceBand                | int               | `0`                                           | Mark price band                   |
| LastPriceProtectedBand       | int               | `0`                                           | Last price protected band         |
| TradingBandwidth             | int               | `0`                                           | Trading bandwidth                 |
| IndexOracleId                | string            | `""`                                          | Oracle ID for the market index    |
| ExpiryTime                   | time.Time         | `time.Unix(0, 0)` (represents epoch time)     | Expiry time of the market         |
| IsActive                     | bool              | `true`                                        | Whether the market is active      |
| IsSettled                    | bool              | `false`                                       | Whether the market is settled     |
| CreatedBlockHeight           | int               | `0`                                           | Block height when market is created |
| ClosedBlockHeight            | int               | `0`                                           | Block height when market is closed  |

## Testing

Guidelines on how to test the Market Module:

1. Setting up the test environment.
2. Running unit tests.
3. Running integration tests.
4. Expected outcomes and potential pitfalls.

## Areas of Improvement

#### Shortcoming 1: Input Validation

Only the expiry time argument is validated for correct format. The other arguments (e.g., market type, base, quote, etc.) aren't checked for validity in the CLI command.

For example, for txMarket.go
```go
return errorsmod.Wrapf(sdkerrors.ErrInvalidRequest, "invalid expiry time: %s", err)

```
**Improvements**
```go
if len(argsMarketType) == 0 || len(argsBase) == 0 || len(argsQuote) == 0 {
    return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "market type, base or quote cannot be empty")
}

```
#### Shortcoming 2: Flag Setting

No validation for transaction flags.

The flags.AddTxFlagsToCmd(cmd) method adds transaction flags to the command, but there's no check if these flags are correctly provided by the user or if they are valid.

For example, for txMarket.go
```go
flags.AddTxFlagsToCmd(cmd)

```

**Improvements**

Provide validation for transaction flags to ensure they are correctly set and give feedback on any missing or invalid flags.
```go
// After calling flags.AddTxFlagsToCmd(cmd)

if !cmd.Flags().Changed("from") {
    return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "the 'from' flag is required")
}

```
#### Shortcoming 3: Documentations
No detailed argument descriptions

There's a short description provided, but detailed documentation about each argument's expected format and values is missing.

**Improvements**

Enhance the documentation to provide more context on each argument. This would assist users in understanding how to use the command correctly.

```go
cmd := &cobra.Command{
    // ... other properties
    Long: `
This command is used to create a market with the following arguments:

- market-type: The type of market being created.
- base: The base asset.
- quote: The quote asset.
- base-usd-price: Current USD price of the base asset.
- quote-usd-price: Current USD price of the quote asset.
- index-oracle-id: The ID of the oracle that provides the index.
- expiry-time: Expiry time for the market in Unix timestamp format.
`,
}

```

#### Shortcoming 4: Error Feedback
Errors are directly returned without additional contextual information. While this is generally fine for developers, it might not be user-friendly for end users who might benefit from more descriptive error messages.

For example for queryMarket.go

**Improvements**

Wrap errors with descriptive messages to provide better feedback. For example:
```go
// Instead of:
// return err

// Use:
return fmt.Errorf("failed to query all markets: %w", err)


```

#### Shortcoming 5: CLI Command Naming
The 'CmdShowMarket' command uses market as its name. While this is descriptive, it might be more intuitive to use verbs like get or show for querying commands.

For example for queryMarket.go

```go
cmd := &cobra.Command{
    Use:   "market [name]",
    ...
}

```

**Improvements**

Consider renaming the command to something like get-market or show-market for clarity.

```go
cmd := &cobra.Command{
    Use:   "get-market [name]",
    ...
}

```
## Contribute

We're thrilled that you're considering contributing to our module! Here's what you need to know to get started:

### 1. Setting Up the Development Environment

- **Prerequisites**: Before diving into development, make sure you have [list any tools, software, or dependencies that are needed, e.g., Docker, Node.js, etc.] installed.
- **Fork and Clone**: Fork this repository and clone it to your local machine. [Link to a detailed setup guide if you have one]
- **Installation**: Navigate to the root directory and run [specific commands, e.g., `npm install` or `pip install -r requirements.txt`].

### 2. Coding Standards

- **Code Style**: We adhere to [specific coding standards, e.g., PEP8 for Python, or the Airbnb style guide for JavaScript]. Please ensure your contributions respect these standards.
- **Documentation**: Comment your code where necessary. If you introduce a new feature, update the documentation accordingly.
- **Testing**: Ensure that your code does not break any existing functionality. Write tests for new features and run existing tests with [specific command, e.g., `npm test`].

### 3. Pull Request and Code Review Process

- **Branching**: Create a new branch for each feature or fix. Naming conventions are crucial; consider a format like `feature/your-feature-name` or `fix/issue-number`.
- **Commit Messages**: Craft clear, concise commit messages. If there's an associated issue, reference it in the message.
- **Submit a Pull Request (PR)**: Once you're satisfied with your changes, push the branch and create a PR against our main branch. Ensure that your PR description is detailed, explaining the purpose, changes made, and any other pertinent details.
- **Review**: One of our maintainers will review your PR. Address any comments or suggestions they might have.
- **Merge**: After review and any necessary adjustments, a maintainer will merge your PR. Congratulations on your contribution!

## License

This module is developed and maintained by **Switcheo Labs**. It's licensed under the [name of the license, e.g., "MIT License"]. For detailed information, please refer to the [LICENSE](path-to-LICENSE-file-if-it-exists) file in this repository.

