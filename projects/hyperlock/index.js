const { sumTokensExport } = require('../helper/unwrapLPs')

// https://docs.hyperlock.finance/developers/hyperlock-contracts
module.exports = {
  doublecounted: true,
  blast: {
    tvl: sumTokensExport({ owner: '0xc28EffdfEF75448243c1d9bA972b97e32dF60d06', resolveUniV3: true, })
  }
}