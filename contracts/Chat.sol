// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Chat {
    struct Message {
        address owner;
        string value;
    }

    Message[] private _messages;

    function getMessages() external view returns (Message[] memory) {
        return _messages;
    }

    function pushMessage(string memory _value) external {
        _messages.push(Message({
            owner: msg.sender,
            value: _value
        }));
    }
}
