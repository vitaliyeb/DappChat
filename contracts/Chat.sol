// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Chat {

    struct Message {
        address owner;
        string value;
    }

    Message[] public messages;

    function getMessages() external view returns (Message[] memory) {
        return messages;
    }

    function pushMessage(string memory value) external {
        messages.push(Message({
            owner: msg.sender,
            value: value
        }));
    }
}
