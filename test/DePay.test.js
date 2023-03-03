const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledDePay = require("../ethereum/build/DePay.json");

let accounts;
let DePay;
let balance;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  DePay = await new web3.eth.Contract(compiledDePay.abi)
    .deploy({ data: compiledDePay.evm.bytecode.object })
    .send({ from: accounts[0], gas: "3000000" });
});

describe("Deployed Smart Contracts supports normal features", () => {
  it("A DePay smart Contract deployed on network", () => {
    assert.ok(DePay.options.address);
  });

  it("allows people to add funds corresponding to their address", async () => {
    await DePay.methods.addFund().send({
      value: "2000",
      from: accounts[1],
    });
    balance = await DePay.methods.balance(accounts[1]).call();
    assert(balance == 2000);
  });

  it("does not allow to send transaction with zero eth", async () => {
    try {
      await DePay.methods.addFund().send({
        value: "0",
        from: accounts[1],
      });
      assert(false);
    } catch (error) {
      assert(error);
    }
  });

  it("allows you to withdraw added fund", async () => {
    await DePay.methods.addFund().send({
      value: "2000",
      from: accounts[1],
    });
    await DePay.methods.withdraw("1000").send({
      value: "0",
      from: accounts[1],
    });

    balance = await DePay.methods.balance(accounts[1]).call();
    assert(balance == 1000);
  });
});
