import TonApi from "./TonApi";
const initExtraton = async () => {
    const ton = await TonApi.build(new TonApi)    
  console.log('wallet: ' + ton.wallet.getAddress());
   console.log('payload: ' + await ton.payload(123));
    console.log('contract: ' + ton.contract);   
    const contractMessageProcessing = await ton.wallet.transfer(
        ton.contract, 1e8, true, await ton.payload(123));
    await contractMessageProcessing.wait();
    const transactionId = contractMessageProcessing.txid;
    console.log(transactionId);   
    return {
      transactionId,
    }
}
export default async() => {
  return initExtraton();
}
