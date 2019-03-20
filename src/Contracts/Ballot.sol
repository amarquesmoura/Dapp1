pragma solidity >=0.4.22 <0.7.0;

import "zos-lib/contracts/Initializable.sol";

contract Ballot is Initializable {

    address public owner;

    struct Proposal {  
        bytes32 name;
        int voteCount;
    }

    struct Voter {
        bool voted;
    }

    mapping(address => Voter) public voters;

    Proposal[] public proposals;

    function initialize(bytes32[] memory proposalNames) public initializer {
        owner = msg.sender;
        for(uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }

}