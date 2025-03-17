const { getSolBalanceFromStakePool } = require('../helper/solana')

async function tvl(api) {
  await getSolBalanceFromStakePool('Jito4APyf642JPZPx3hGc6WWJ8zPKtRbRs4P815Awbb', api)
}

module.exports = {
  timetravel: false,
  solana: {
    tvl
  }
}