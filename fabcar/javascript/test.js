import "github.com/hyperledger/fabric/core/chaincode/lib/cid"

id, err = cid.GetID(stub)

console.log(id,err);
