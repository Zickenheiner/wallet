// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Wallet {
  mapping(address => uint256) private Balances;

  function withdraw(address payable _to, uint _amount ) external {
    require(Balances[msg.sender] >= _amount, "Insufficient balance");
    Balances[msg.sender] -= _amount;
    _to.transfer(_amount); 
  }

  function getBalance () external view returns (uint256) {
    return Balances[msg.sender];
  }

  receive() external payable {
      Balances[msg.sender] += msg.value;
  }

  fallback() external payable {
  }
}



