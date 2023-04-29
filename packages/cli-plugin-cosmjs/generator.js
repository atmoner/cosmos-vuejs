module.exports = api => {
  console.log(api.options.cosmjsSelectedFeatures)
  if (api.options.cosmjsSelectedFeatures === 'stargate') {
    api.extendPackage({
      dependencies: {
        '@cosmjs/stargate': '^0.30.1',
      },
    });
  }  
  if (api.options.cosmjsSelectedFeatures === 'cosmwasmstargate') {
    api.extendPackage({
      dependencies: {
        '@cosmjs/cosmwasm-stargate': '^0.30.1',
      },
    });
  } 
  if (api.options.cosmjsSelectedFeatures === 'protosigning') {
    api.extendPackage({
      dependencies: {
        '@cosmjs/proto-signing': '^0.30.1',
      },
    });
  } 
  if (api.options.cosmjsSelectedFeatures === 'ledgeramino') {
    api.extendPackage({
      dependencies: {
        '@cosmjs/ledger-amino': '^0.30.1',
      },
    });
  }        
};