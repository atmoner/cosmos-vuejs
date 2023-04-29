module.exports = [
  {
    name: 'cosmjsSelectedFeatures',
    type: 'checkbox',
    message: 'Pick additional @cosmJs features:',
    choices: [
      {
        name: 'stargate',
        value: 'stargate',
        checked: true
      },
      {
        name: 'cosmwasm-stargate',
        value: 'cosmwasmstargate'
      },
      {
        name: 'proto-signing',
        value: 'protosigning'
      },
      {
        name: 'ledger-amino',
        value: 'ledgeramino'
      },
      {
        name: 'faucet-client',
        value: 'faucetclient'
      }
    ]
  }
]