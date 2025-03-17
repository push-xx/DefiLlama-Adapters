const { sumTokens2, getConnection, } = require("../helper/solana");

async function tvl(api) {
  const connection = getConnection();

  // Fragmetric Vaults
  fragSOLVault = [
    ['J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn', 'AkbZvKxUAxMKz92FF7g5k2YLCJftg8SnYEPWdmZTt3mp'], 
    ['BNso1VUJnh4zcfpZa6986Ea66P6TCp59hvtNJ8b1X85', 'AkbZvKxUAxMKz92FF7g5k2YLCJftg8SnYEPWdmZTt3mp'], 
    ['mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So', 'AkbZvKxUAxMKz92FF7g5k2YLCJftg8SnYEPWdmZTt3mp'], 
  ]
  fragJTOVault = [
    ['J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn', 'BmJvUzoiiNBRx3v2Gqsix9WvVtw8FaztrfBHQyqpMbTd'], 
  ]

  // Kyros Vaults
  kySOLVault = [
    ['J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn', 'CQpvXgoaaawDCLh8FwMZEwQqnPakRUZ5BnzhjnEBPJv'], 
  ]
  kyJTOVault = [
    ['jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL', 'ABsoYTwRPBJEf55G7N8hVw7tQnDKBA6GkZCKBVrjTTcf'], 
  ]

  // Renzo Vaults
  ezSOLVault = [
    ['J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn', 'CugziSqZXcUStNPXbtRmq6atsrHqWY2fH2tAhsyApQrV'], 
  ]
  ezJTOVault = [
    ['E6KBP5nhuJZnNcGJwDdbk6mNyQZWWyEzR3PBu6HegFsV', 'C9vUzoiiNBRx3v2Gqsix9WvVtw8FaztrfBHQyqpMbTd'], 
  ]

  // bzSOL Vault
  bzSOLVault = [
    ['BNso1VUJnh4zcfpZa6986Ea66P6TCp59hvtNJ8b1X85', 'AKkqZwemKgFJG86FYQmmS8f8TVDqjfd56b2LYdSZLAPF'], 
  ]

  // dmSOL Vault
  dmSOLVault = [
    ['J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn', '8W6Wd7CZEmSTNuz8gaYZXkXawWATYYcjgyPkrWEQ1DYt'], 
  ]

  // rstSOL Vault
  rstSOLVault = [
    ['Bybit2vBJGhPF52GBdNaQfUJ6ZpThSgHBobjWZpLPb4B', 'JAd4ZY5pyUz14GaL2qt7uwjhyNKSCNvny8r3w8TeFV2F'], 
  ]

  
  tokensAndOwners = [
    ...fragSOLVault,
    ...fragJTOVault,
    ...kySOLVault,
    ...kyJTOVault,
    ...ezSOLVault,
    ...ezJTOVault,
    ...bzSOLVault,
    ...dmSOLVault,
    ...rstSOLVault,
  ]
  
  return sumTokens2({
    balances: api.getBalances(), tokensAndOwners
  })
}

module.exports = {
  timetravel: false,
  methodology: "TVL is calculated by summing all re-staked assets.",
  solana: { tvl },
};
