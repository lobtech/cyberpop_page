import store from '@/store'
import contracts from '@/tools/contracts'
import { rejects } from 'assert'
import { ref, computed } from 'vue'
const Web3 = (window as any).Web3 // 引用全局的web3 在index.html文件cdn引入<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
const Moralis = (window as any).Moralis // 引用全局的Moralis 在index.html文件cdn引入<script src="https://cdn.jsdelivr.net/npm/moralis@latest/dist/moralis.min.js"></script>



// 登录钱包
const login = async () => {
    const ethereum = (window as any).ethereum // 获取小狐狸实例
    // if (!ethereum) {
    //     return 'No install';
    // }
    return ethereum.request({ method: 'eth_requestAccounts' })
}

// 是否安装metamask
const hasMetaMask = async () => {
    const ethereum = (window as any).ethereum // 获取小狐狸实例
    if (!ethereum) {
        return 'No install';
    }
}



// 账户列表
const getAccounts = async () => {
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const res = await web3.eth.getAccounts()
    console.log(`---------->:getAccounts`, res)
    return res;
}



// 查询余额
const getBalance = async (id: any) => {
    const { abi, address }  = (contracts as any)['nft']
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    let res = await contract.methods.batchBalanceOf(id).call();
    return res;
}


// 授权某个合约可使用我的货币
const approve = (contractName: string = 'test', contractAddress: string = '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC', num: string = '10') => {
    const { abi, address } = (contracts as any)[contractName]
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    let user = store.state.moralis?.user.accounts[0]
    console.log(`---------->:user`, user)
    // console.log(`---------->日志输出:Moralis.Units.Token("0.5", "18")`, Moralis.Units.Token('0.5', '18'))
    // 发送交易，使用事件获取返回结果
    contract.methods
        .approve(contractAddress, `${Number(num) * Math.pow(10, 18)}`)
        .send({ from: user })
        .on('transactionHash', function (hash: any) {
            console.log(`---------->:hash`, hash)
        })
        .on('receipt', function (receipt: any) {
            console.log(`---------->:receipt`, receipt)
        })
        .on('confirmation', function (confirmationNumber: any, receipt: any) {
            console.log(`---------->:confirmationNumber, receipt`, confirmationNumber, receipt)
        })
        .on('error', (err: any) => {
            console.log(`---------->:err`, err)
        })
}



// 是否授权
const isApprovedForAll = async (abi:any, address:any) => {
    const web3 = new Web3((window as any).ethereum)
    const contract = new web3.eth.Contract(abi, address)
    let app = await contract.methods.isApprovedForAll(accounts.value, '0x6f25CdAB7Ec3a7ee78ba9635c1dd494fC71420ad').call()
}


// 资产转移
const accounts = computed(() => store?.state.user?.idTemp);
const safeTransferFrom = async (abi:any, address:any, TransferFrom:any, id:any, number?:any) => {
    // console.log(abi, address, TransferFrom, id, number);
    const web3 = new Web3((window as any ).ethereum)
    const contract = new web3.eth.Contract(abi, address)
    return new Promise((resolve, reject) => {
        if(!number){  // 721 不需要传数量
            contract.methods.safeTransferFrom(accounts.value, TransferFrom, id, '0x').send({ from: accounts.value }).then( (receipt:any) => {
                resolve(receipt)
            }).catch((err:any) => {
                resolve(0)
                isApprovedForAll(abi, address);
            })
        }else{ // 1155需要传入数量
            contract.methods.safeTransferFrom(accounts.value, TransferFrom, id, number, '0x').send({ from: accounts.value }).then( (receipt:any) => {
                resolve(receipt)
            }).catch((err:any) => {
                resolve(0)
                isApprovedForAll(abi, address);
            })
        }
    })
}

// 资产查询
const batchBalanceOf = (abi:any, address:any) => {
    return new Promise(async (resolve, reject) => {
        // console.log(abi, address, accounts.value);
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let res = await contract.methods.batchBalanceOf(accounts.value).call();
        resolve(res);
    })
}

const balanceOfBatch = (abi:any, address:any, ids:any) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((window as any ).ethereum)
        const contract = new web3.eth.Contract(abi, address)
        let res = await contract.methods.balanceOfBatch([accounts.value, accounts.value, accounts.value], ids).call();
        resolve(res);
    })
}


// lootbox礼盒专用 開發人員面向使用者介面，使用此功能從戰利品盒中獲得隨機獎勵
const unpack = (abi: any, address: any, id: any, number: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((window as any ).ethereum)
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.unpack(id, number).send({ from: accounts.value})
        .on('transactionHash', function (hash: any) {
            console.log(`---------->:hash`, hash)
        })
        .on('receipt', function (receipt: any) {
            resolve(receipt)
            console.log(`---------->:receipt`, receipt)
        })
        .on('confirmation', function (confirmationNumber: any, receipt: any) {
            console.log(`---------->:confirmationNumber, receipt`, confirmationNumber, receipt)
        })
        .on('error', (err: any) => {
            console.log(`---------->:err`, err)
            resolve(0)
        })
    })
}


// 查询721合约的
const tokensOfOwner = (abi: any, address: any) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let result = await contract.methods.tokensOfOwner(accounts.value).call();
        resolve(result);
    })
}


const addChain = (chainId: Number) => {
    const ethereum = (window as any).ethereum // 获取小狐狸实例
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    // console.log(web3.utils.numberToHex(chainId), 'web3.utils.numberToHex(chainId)');
    let info: any;
    if(chainId == 43113){
        info = {
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: web3.utils.numberToHex(43113),
                    chainName: 'AVAX',
                    nativeCurrency: {
                        name: 'AVAX',
                        symbol: 'AVAX', // 2-6 characters long
                        decimals: 18
                    },
                    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
                    blockExplorerUrls: ['https://testnet.snowtrace.io/']
                }
            ]
        }
    }else{
        info = {
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: web3.utils.numberToHex(80001),
                    chainName: 'Mumbai',
                    nativeCurrency: {
                        name: 'MATIC',
                        symbol: 'MATIC', // 2-6 characters long
                        decimals: 18
                    },
                    rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
                    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
                }
            ]
        }
    }
    return new Promise((resolve, reject) => {
        ethereum.request({
            ...info
        }).then((res:any)=>{
            web3.eth.net.getId().then((realChainId: any) => {
                // console.log('0',realChainId, info.params[0].chainId);
                if( realChainId == info.params[0].chainId ){ // 通过切换结果判断切换成功 或 失败
                    resolve(1)
                    return
                }
                resolve(0)
            })  

        })
        
    })

}


export default {
    safeTransferFrom,
    batchBalanceOf,
    login,
    hasMetaMask,
    getAccounts,
    getBalance,
    approve,
    balanceOfBatch,
    unpack,
    tokensOfOwner,
    addChain,
    contracts,
}
