// filepath: /Users/vordium/Documents/GitHub/escrow-ui/vue.config.js
module.exports = {
  configureWebpack: {
    output: {
      hashFunction: 'xxhash64', // Use a supported hash function
    },
  },
};