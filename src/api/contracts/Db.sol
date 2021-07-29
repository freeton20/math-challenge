pragma ton-solidity >= 0.44.0;
pragma AbiHeader expire;

contract Tonsdk {

    mapping(address=>uint128) users;

    constructor() public onlyOwnerAccept {
       
    }

    uint128 counter;

    modifier onlyOwnerAccept {
        require(tvm.pubkey() != 0 && tvm.pubkey() == msg.pubkey());
        tvm.accept();
        _;
    }

    function setUser(uint128 timer) public {
        tvm.accept();       
        users[msg.sender] = timer;
    }    

    function getUser(address userAddress) public view returns(uint128){
        tvm.accept();
        return users[userAddress];
    }

    function getAll() public view returns (address[], uint128[]){   
        address[] addresses;
        uint128[] times;
          for ((address key, uint128 value) : users) { // iteration over mapping 
            addresses.push(key);
            times.push(value);
          }       
          return (addresses, times);
    }   
}