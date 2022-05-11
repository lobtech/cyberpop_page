import store from '@/store'
import contracts from '@/tools/contracts'
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

const testactouns = () => {
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    // if (!ethereum) {
    //     return 'No install';
    // }
    console.log(web3);
    
    console.log(web3.eth.accounts, 'ethereum.eth.defaultAccount');
    
    // return ethereum.request({ method: 'eth_requestAccounts' })
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
// const approve = (contractName: string = 'test', contractAddress: string = '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC', num: string = '10') => {
//     const { abi, address } = (contracts as any)[contractName]
//     const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
//     const contract = new web3.eth.Contract(abi, address) // 创建合约
//     let user = store.state.moralis?.user.accounts[0]
//     console.log(`---------->:user`, user)
//     // console.log(`---------->日志输出:Moralis.Units.Token("0.5", "18")`, Moralis.Units.Token('0.5', '18'))
//     // 发送交易，使用事件获取返回结果
//     contract.methods
//         .approve(contractAddress, `${Number(num) * Math.pow(10, 18)}`)
//         .send({ from: user })
//         .on('transactionHash', function (hash: any) {
//             console.log(`---------->:hash`, hash)
//         })
//         .on('receipt', function (receipt: any) {
//             console.log(`---------->:receipt`, receipt)
//         })
//         .on('confirmation', function (confirmationNumber: any, receipt: any) {
//             console.log(`---------->:confirmationNumber, receipt`, confirmationNumber, receipt)
//         })
//         .on('error', (err: any) => {
//             console.log(`---------->:err`, err)
//         })
// }

// 资产转移
const accounts = computed(() => store?.state.user?.idTemp);
const safeTransferFrom = async (abi:any, address:any, TransferFrom:any, id:any, number?:any) => {
    console.log(abi, address, TransferFrom, id, number);
    const web3 = new Web3((window as any ).ethereum)
    const contract = new web3.eth.Contract(abi, address)
    return new Promise((resolve, reject) => {
        if(!number){  // 721 不需要传数量
            console.log('这里');
            
            contract.methods.safeTransferFrom(accounts.value, TransferFrom, id, '0x').send({ from: accounts.value }).then( (receipt:any) => {
                resolve(receipt)
            }).catch((err:any) => {
                resolve(0)
            })
        }else{ // 1155需要传入数量
            contract.methods.safeTransferFrom(accounts.value, TransferFrom, id, number, '0x').send({ from: accounts.value }).then( (receipt:any) => {
                resolve(receipt)
            }).catch((err:any) => {
                resolve(0)
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

// 原生1155查询资产
const balanceOfBatch = (abi: any, address: any, ids: any, isMarketV2?: any) => {
    let tempAccounts: any = []
    for (const iterator of ids) {
        tempAccounts.push(isMarketV2 ? isMarketV2 : accounts.value)
    }
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((window as any ).ethereum)
        const contract = new web3.eth.Contract(abi, address)
        let res = await contract.methods.balanceOfBatch(tempAccounts, ids).call();
        resolve(res);
    })
}

// 市场合约查询
const balanceOf = (abi:any, address:any, id:any) => {
    console.log(abi, address, id);
    
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((window as any ).ethereum)
        const contract = new web3.eth.Contract(abi, address)
        let res = await contract.methods.balanceOf(accounts.value, id).call();
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


// 购买NFT
const buyLootBox = (abi: any, address: any, boxId: any, price: any, number?: any) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address);

        console.log(abi, address);

        console.log(boxId, price);
        
        contract.methods.buyLootBox(boxId, price, number || 1).send({ from: accounts.value }).then((receipt:any) => {
            resolve(receipt)
        }).catch((err:any) => {
            console.log(err);
            resolve(0)
        })
    })
}

const allowance = (abi: any, address: any, contract_address: any) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address);
        let res = await contract.methods.allowance(accounts.value, contract_address).call();
        resolve(res);
    })
}

// 授权某个合约可使用我的货币
const approve = (abi: any, address: any, contract_address: any, number: any) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address);
        contract.methods.approve(contract_address, number).send({ from: accounts.value }).then((receipt:any) => {
            resolve(receipt)
        }).catch((err:any) => {
            console.log(err);
            resolve(0)
        })
    })
}

const totolsuppl = async (abi: any[], address: string) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address);
        let res = await contract.methods.totalSupply().call()
        resolve(res)
    })

}

// 查询是否授权过了
const getApproved = (abi: any, address: string, tokenId: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        const result = contract.methods.getApproved(tokenId).call()
        resolve(result);
    })
}

const isApprovedForAll = (abi: any, address: string, operator: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        const result = contract.methods.isApprovedForAll(accounts.value, operator).call()
        resolve(result);
    })
}

// 游戏池子授权专用
const approvePool = (abi: any[], address: string, tokenId: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.approve('0xB2172269b03BD2b5c89dcB2A7187632B435E8484', tokenId).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error');
        })
    })
}

// 1155授权专用
const setApprovalForAll = (abi: any[], address: string) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.setApprovalForAll('0xB2172269b03BD2b5c89dcB2A7187632B435E8484', true).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error');
        })
    })
}


// 加载角色
const loadingNft = (abi: any[], address: string, tokenId: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.loadingRole(tokenId).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error');
        })
    })
}

// 加载角色1155
const loadingErc1155 = (abi: any[], address: string, tokenId: any, number: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.loadingWeapons(tokenId, number).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error');
        })
    })
}


// 提现取回
const withdrawRole = (abi: any[], address: string, tokenId: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.withdrawRole(accounts.value, tokenId).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error');
        })
    })
}


// 质押合约查询以及质押了多少的操作
const getBalanceOf = (abi: any[], address: string) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let result = await contract.methods.getBalanceOf(accounts.value).call();
        resolve(result)
    })
}


// 质押池子总数
const getTotalSupply = (abi: any[], address: string) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let result = await contract.methods.getTotalSupply().call();
        resolve(result)
    })
}

const ERC20balanceOf = (abi: any[], address: string) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let result = await contract.methods.balanceOf(accounts.value).call();
        resolve(result/1000000)
    })
} 

// 质押cyt数量
const stake = (abi: any[], address: string, number: number) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.stake(number).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error');
        })
    })
}


// 质押CYT剩余天数
const DaysRemaining = (abi: any[], address: string, tokenId: number) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let _price = await contract.methods._price([tokenId]).call();
        console.log(_price, '_price');
        let earned = await contract.methods.earned(accounts.value).call();
        console.log(earned, 'earned');
        let rewardPerToken = await contract.methods.rewardPerToken().call();
        let getBalanceOf = await contract.methods.getBalanceOf(accounts.value).call();
        console.log((_price - earned) * 1000000000000000000  / (rewardPerToken * getBalanceOf)); //_balances
        
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
    balanceOf,
    buyLootBox,
    allowance,
    totolsuppl,
    getApproved,
    isApprovedForAll,
    approvePool,
    setApprovalForAll,
    loadingNft,
    loadingErc1155,
    withdrawRole,
    testactouns,
    getBalanceOf,
    getTotalSupply,
    ERC20balanceOf,
    stake,
    DaysRemaining,
    contracts,
}
