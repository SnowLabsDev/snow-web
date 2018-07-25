import web3 from './web3';

const address = '0xBA17Ba2246CE84E388B8f04909180ed3f2ef75b7'; //0xc2EBE652DC717Bcea30D90Fb04758C15a3e006bc

const abi = [
  {"constant":true,"inputs":[],"name":"getVotersArray","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":false,"inputs":[{"name":"newVote","type":"int256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":true,"inputs":[],"name":"haveIVoted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[],"name":"ballotInitialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"votersArray","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[],"name":"proposal","outputs":[{"name":"name","type":"string"},{"name":"voteBalance","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":false,"inputs":[],"name":"closeBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":true,"inputs":[],"name":"ballotClosed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},
  {"inputs":[{"name":"proposalName","type":"string"},{"name":"invites","type":"address[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}
];

export default new web3.eth.Contract(abi, address);
