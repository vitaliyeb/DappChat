// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greetings {
    event ChangeGreeting(string greeting);
    string greeting;

    constructor() {
        greeting = "Hello World";
    }

    function getGreeting() public view returns(string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
        emit ChangeGreeting(_greeting);
    }
}
