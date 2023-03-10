# Get started

This guide will quickly take you through how to initialize, create, and deploy your subgraph with OKC's Subgraph service.

By deploying the subgraph, you can explore the subgraph GraphQL API by issuing queries and viewing the schema.

OKC Subgraph currently provides the Hosted Service. If you want to deploy a subgraph on it, please send your application to  [subgraph@okx.com](mailto:subgraph@okx.com), and provide the information below:

| **Information**                                          | **Sample**                                  |
| ------------------------------------------------------------ | ------------------------------------------- |
| Name of project                                              | OKC Test Project                            |
| Official website (if any)                                    | https://okctestproject.io/                  |
| Github (if any)                                              | https://github.com/okctestproject           |
| Type of project                                              | DeFi，GameFi，NFT...                        |
| Introduction to project                                      | Okctestproject is an AMM swap               |
| Uses of the Subgraph service                                 | Query business data and present it to users |
| Special requirements for Subgraph services (e.g., QPS, please specify if any) | QPS > 100                                   |
| Way of contacting you (please provide Telegram account and email) | @okctestproject                             |
| Expected subgraph name                                       | okctestproject-statistics-v1                |

# How to deploy Subgraph

## Develop Subgraph

### Code specification

Refer to https://github.com/okc-subgraph/subgraph-example/blob/main/docs/Developing.md

### Version requirement

-  "@graphprotocol/graph-cli": "^0.20.1"
- "@graphprotocol/graph-ts": "^0.20.1"
- "npm": "^7.20.5"

### Block height requirement

- The query block height can't be lower than 13,400,000
- Sample：https://github.com/okc-subgraph/subgraph-example

## Upload Subgraph code to Github

Special notes

- If the code repository is a private repository, you need to add your OKC Github account subgraph@okx.com. (This step isn't required for public code repositories)
- Before uploading the subgraph code, please make sure it's been compiled

## Deploy the Subgraph on the Hosted Service

OKC will help you with the deployment

## With the Subgraph deployed, you can query the Graph

After the subgraph is deployed, it takes some time to synchronize the block height before it can be queried.

# How to query the Graph

- Query URL ：https://www.okx.com/okc/subgraph-hosted/name/<Subgraph_name>
- Query Playground：https://www.okx.com/okc/subgraph-hosted/name/<Subgraph_name>/graphql

Please replace `<Subgraph_name>` in the example with your own Subgraph name

## Example

https://github.com/okc-subgraph/subgraph-example/blob/main/docs/Querying.md

# FAQ

## What is a subgraph?

A subgraph is a custom API built on blockchain data. Subgraphs are queried using the GraphQL query language and are deployed to a Graph node using the Graph CLI. Once deployed and published, subgraphs are available to be queried by subgraph consumers.

## Are there requirements for subgraph code？

- "@graphprotocol/graph-cli": "^0.20.1"
- "@graphprotocol/graph-ts": "^0.20.1"
- "npm": "^7.20.5"

For more code specifications, refer to https://github.com/okc-subgraph/subgraph-example/blob/main/docs/Developing.md

## Is it possible to deploy subgraphs with the same name？

No, duplicate subgraph names aren't allowed.

## Can I delete my subgraph?

Yes. You may contact the OKC support team to do that for you.

## Does the deployed subgraph support modifications or upgrades？

Yes. You may contact the OKC support team for further help.

## What are the restrictions when querying the subgraph?

There will be a query limit. If you encounter limited flow or no response to the query, please contact the OKC support team.

## Do I need to pay for querying the subgraph?

Free for now.