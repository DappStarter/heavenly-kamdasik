require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember history hope cart fresh stadium'; 
let testAccounts = [
"0xa1a719d9a4fbcbcfc533191512cc359f344860c8ff8fad81cb5971d73e3ff242",
"0x1e4de6c7b3800bd1cde5a366bffb511351f01245a8463e98460e6d31dfe9efa6",
"0x1e5f916e2fea9f17933daea05ed2f2ee39760cd497c8524fc472e4b82b62ec26",
"0x459d8350a404c5ca1650ed5f0c3f8d7fef7b6e68e171007cf44af4f9b6c9414e",
"0xb16c21d7722fcf2491c7862f992c3ec5ac3cd0eac8cc77c194c7d825e9b2037b",
"0xbae42c04d245fc707c35a0f617882fcfdbd656fe404492a1db89c9d35b742a02",
"0xbad6a83cd10e862c6467f082278166db582f7bb055a32f225ee0f3976f9354ef",
"0x7b3abb35e0048f5219a1e9839cb307d4c20a4416c1928c5d77d2f797ee4cacfa",
"0xe96a09d7ee1afbcd24594b28676816ca82743366aa26074973baf48f2a6b6d60",
"0xb636a303b574d252c20fdf203b3853cddff53e494626b5a4301b43973934bf16"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
