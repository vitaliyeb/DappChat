// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Chat {
    event NewMessage(address owner, string value);

    struct Message {
        address owner;
        string value;
    }

    Message[] private _messages;

    modifier notEmptyMessage(string _value) {

    }

    function getMessages() external view notEmptyMessage returns (Message[] memory) {
        return _messages;
    }

    function pushMessage(string memory _value) external {
        _messages.push(Message({
            owner: msg.sender,
            value: _value
        }));
        emit NewMessage(msg.sender, _value);
    }
}
