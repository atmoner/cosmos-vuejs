module.exports = api => {
  if (api.options.find(element => element === 'stargate')) {
    api.extendPackage({
      dependencies: {
        '@cosmjs/stargate': '^0.30.1',
      },
    });
  }  
  if (api.options.find(element => element === 'cosmwasmstargate')) {
    api.extendPackage({
      dependencies: {
        '@cosmjs/cosmwasm-stargate': '^0.30.1',
      },
    });
  } 
  if (api.options.find(element => element === 'protosigning')) {
    api.extendPackage({
      dependencies: {
        '@cosmjs/proto-signing': '^0.30.1',
      },
    });
  } 
  if (api.options.find(element => element === 'ledgeramino')) {
    api.extendPackage({
      dependencies: {
        '@cosmjs/ledger-amino': '^0.30.1',
      },
    });
  }        
};