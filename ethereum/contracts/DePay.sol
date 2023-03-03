/**
 *Submitted for verification at Etherscan.io on 2023-02-22
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract DePay {
    struct Request {
        string description;
        uint256 value;
        bool complete;
        address from;
    }

    mapping(address => Request[]) public requests;
    mapping(address => uint256) public balance;
    mapping(address => mapping(address => uint256)) public given;
    mapping(address => mapping(address => uint256)) public used;
    mapping(address => mapping(address => uint256)) public borrowed;
    mapping(address => mapping(address => uint256)) public paidTo;
    mapping(address => mapping(address => uint256)) public ReceivedFrom;
    mapping(address => mapping(address => uint8)) public rate;
    mapping(address => address[]) public paidArr;
    mapping(address => address[]) public receivedArr;
    mapping(address => address[]) public loanGivenArr;
    mapping(address => address[]) public loanTakenArr;
    mapping(address => uint256) public totalBalanceIHaveAdded;
    event transactionData(
        address indexed _from,
        uint256 amount,
        address indexed _to,
        uint256 date,
        uint256 time,
        string purpose
    );

    function addFund() public payable {
        require(msg.value > 0, "transaction with 0 eth is not allowed");
        balance[msg.sender] += msg.value;
        totalBalanceIHaveAdded[msg.sender] += msg.value;
    }

    function pay(
        address payable _to,
        uint256 amount,
        uint256 date,
        uint256 time,
        string memory purpose
    ) public payable {
        require(amount < balance[msg.sender], "Insufficient funds");
        require(amount > 0, "transaction with 0 eth is not allowed");
        require(_to != msg.sender, "You cannot pay money to yourself");
        _to.transfer(amount);
        balance[msg.sender] -= amount;
        if (paidTo[msg.sender][_to] == 0) {
            paidArr[msg.sender].push(_to);
            receivedArr[_to].push(msg.sender);
        }
        paidTo[msg.sender][_to] += amount;
        ReceivedFrom[_to][msg.sender] += amount;
        emit transactionData(msg.sender, amount, _to, date, time, purpose);
    }

    function withdraw(uint256 amount) public payable {
        require(amount < balance[msg.sender], "Insufficient funds");
        require(amount > 0, "transaction with 0 eth is not allowed");
        (payable(msg.sender)).transfer(amount);
        balance[msg.sender] -= amount;
    }

    function lend(uint256 amount, address payable _to) public payable {
        require(amount <= balance[msg.sender], "Insufficient funds");
        require(amount > 0, "transaction with 0 eth is not allowed");
        require(_to != msg.sender, "You cannot lend money to yourself");
        if(borrowed[_to][msg.sender]==0)
        {
        loanGivenArr[msg.sender].push(_to);
        }
        if(given[msg.sender][_to]==0)
        {
        loanTakenArr[_to].push(msg.sender);
        }
        balance[msg.sender] -= amount;
        given[msg.sender][_to] += amount;
        borrowed[_to][msg.sender] += amount;
    }

    function takeBack(uint256 amount, address payable _to) public payable {
        require(
            given[msg.sender][_to] - used[msg.sender][_to] >= amount,
            "The address doesnt have that much funds"
        );
        balance[msg.sender] += amount;
        given[msg.sender][_to] -= amount;
        borrowed[_to][msg.sender] -= amount;
        (payable(msg.sender)).transfer(amount);
    }

    function createRequest(
        string memory description,
        uint256 value,
        address _to
    ) public {
        require(_to!=msg.sender,"Frauds");
        Request storage newRequest = requests[_to].push();
        newRequest.description = description;
        newRequest.value = value;
        newRequest.complete = false;
        newRequest.from = msg.sender;
    }

    function approveRequest(uint256 index) public payable {
        Request storage request = requests[msg.sender][index];
        require(
            request.complete == false,
            "request has already been finalised"
        );
        require(
           request.value-(given[msg.sender][request.from] - used[msg.sender][request.from])<=balance[msg.sender],
            "Not enough funds"
        );
        if (
            given[msg.sender][request.from] - used[msg.sender][request.from] >=request.value
        ) {
            (payable(request.from)).transfer((request.value));
            request.complete = true;
            used[msg.sender][request.from] += request.value;
        } 
        else {
             if(borrowed[request.from][msg.sender]==0)
        {
        loanGivenArr[msg.sender].push(request.from);
        }
        if(given[msg.sender][request.from]==0)
        {
        loanTakenArr[request.from].push(msg.sender);
        }
             (payable(request.from)).transfer((request.value));
            request.complete = true;
            borrowed[request.from][msg.sender]+=request.value-(given[msg.sender][request.from] - used[msg.sender][request.from]);
            given[msg.sender][request.from]+=request.value-(given[msg.sender][request.from] - used[msg.sender][request.from]);
            used[msg.sender][request.from] += request.value;
        }
    }

    function rejectRequest(uint256 index) public {
        Request storage request = requests[msg.sender][index];
        require(
            request.complete == false,
            "request has already been finalised"
        );
        request.complete = true;
    }

    function setRate(address _for,uint8 rates)public{
       require(borrowed[_for][msg.sender]>0,"No loan given");
       rate[_for][msg.sender]=rates;
    }

    function numberOfRequets(address find) external view returns (uint256) {
        return (requests[find].length);
    }

    function numberOfPeopleIPaid(address find) external view returns (uint256) {
        return (paidArr[find].length);
    }

    function numberOfPeopleWhoPaidMe(address find) external view returns (uint256) {
        return (receivedArr[find].length);
    }

    function numberOfPeopleWhomIHaveGivenLoan(address find)
        external
        view
        returns (uint256)
    {
        return (loanGivenArr[find].length);
    }

    function numberOfPeopleWhoHaveGivenLoanToMe(address find)
        external
        view
        returns (uint256)
    {
        return (loanTakenArr[find].length);
    }

    function clearedMyDebt(address _to) public {
        used[msg.sender][_to] = 0;
    }
}