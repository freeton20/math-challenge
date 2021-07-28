import { TonClient, abiContract } from "@tonclient/core";
import { libWeb, libWebSetup } from "@tonclient/lib-web";
import freeton from "freeton";
import abi from "./contracts/Db.abi.json";
libWebSetup({
    binaryURL: "/tonclient.wasm",
});
TonClient.useBinaryLibrary(libWeb);

let client;
if (typeof client == 'undefined') {
    client = new TonClient({
        network: {
            server_address: "net.ton.dev",
        }
    });
}
const contract = "0:9ea560b2fa804a67e71ae2f3fd7e98e04747a97bedf983c72103d4f100100cc0";

async function getPayload(timer) {
    const response = await client.abi.encode_message_body(
        {
            abi: abiContract(abi),
            call_set: {
                function_name: "setUser",
                input: {
                    timer
                }
            },
            signer: { type: "None" },
            is_internal: true
        });
    return response.body;
}

async function initExtraton(timer) {    
    const provider = new freeton.providers.ExtensionProvider(window.freeton);
    const signer = await provider.getSigner();
    const wallet = signer.getWallet()
    const payload = await getPayload(timer)

    const contractMessageProcessing = await wallet.transfer(
        contract, 1e8, true, payload);

    await contractMessageProcessing.wait();

    return contractMessageProcessing.txid;
}

async function getUsers() {
    const [account, message] = await Promise.all([
        // Download the latest state (BOC)
        client.net.query_collection({
            collection: 'accounts',
            filter: { id: { eq: contract } },
            result: 'boc'
        })
            .then(({ result }) => result[0].boc)
            .catch(() => {
                throw Error(`Failed to fetch account data`)
            }),
        // Encode the message 
        client.abi.encode_message({
            abi: abiContract(abi),
            address: contract,
            call_set: {
                function_name: 'getAll',
                input: {}
            },
            signer: { type: 'None' }
        }).then(({ message }) => message)
    ]);

    const response = await client.tvm.run_tvm({ message, account, abi: abiContract(abi) });

    return response.decoded.output;
}

export {
    initExtraton,
    getUsers
}
