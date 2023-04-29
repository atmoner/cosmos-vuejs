module.exports = [
  {
    name: 'cosmjsSelectedFeatures',
    type: 'checkbox',
    message: 'Pick additional @cosmJs features:',
    choices: [
      {
        name: '@cosmjs/stargate',
        value: 'stargate',
        checked: true
      },
      {
        name: '@cosmjs/cosmwasm-stargate',
        value: 'cosmwasmstargate'
      },
      {
        name: '@cosmjs/proto-signing',
        value: 'protosigning'
      },
      {
        name: '@cosmjs/ledger-amino',
        value: 'ledgeramino'
      },
      {
        name: '@cosmjs/faucet-client',
        value: 'faucetclient'
      }
    ]
  }
]