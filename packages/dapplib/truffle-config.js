require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strong response office clutch gesture pave army gesture'; 
let testAccounts = [
"0xc0d26063d443c0f631c0b1cab9366f50c858f3ca0b58497367b4a2e69bd47e1e",
"0x0268bd927ab2b01e038a8813466febff195d5758a569a1675d9b98377e5fe5c8",
"0x818540a174402831d5ce069aaff899d8ff04981a1d691b95abe5fa3082d2e580",
"0xd5faad30427fff5331c9ad264cf4018c03a8d36c01ccc184c6ad9f43e918445c",
"0x418b2730e390bc4a5cc69d06189304cf7735bd2c4c3bbb7630ca698adf6dd17c",
"0x425ba524da4ba88239dd6281950d507b311ba74af1e6b36e7317111f3cf068ca",
"0x3991390a6e933c0017046719743a99331babc2fe149ff5dfb2a7896d4d2019d2",
"0x3613e06e06f3f8369913451c67fc9701d97bbda4f8cc3ec4058688566bfb79b0",
"0x4489ee035a95d4af45f283c531d33be8fdb17bc27216607bb6bb10509cb0ca29",
"0x0512d59773c2fc5e99c027442e737a7d70b0a9ede0ce4ab31122e716d0228048"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

