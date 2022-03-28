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




// 查询合约对象
const getContract = async (contractName: string = 'test') => {
    const { abi, address } = (contracts as any)[contractName]
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    console.log(`---------->:contract`, contract)
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

// 设置某个人的领取状态
const setAirdrop = async (userAddress: string = '', state: boolean = true) => {
    const { abi, address } = contracts['airdrop']
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    let user = store.state.moralis?.user.accounts[0]
    const res = await contract.methods.setUsers(userAddress, state).send({ from: user })
    // const res = await contract.methods.test('0x9a4244c1d438810f09f468dfc2ea4cf40ad93c10', '2').call()
    console.log(`---------->:call_test`, res)
}

// 查询奖池
const pool = async () => {
    const { abi, address } = contracts['money']
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    return await contract.methods.balanceOf('0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC').call()
}

// 是否可领取(用户地址)
const eligible = async (userAddress: string = '') => {
    const { abi, address } = contracts['airdrop']
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    return await contract.methods.contains(userAddress).call()
}
// 领取货币(什么合约，货币地址，谁)
const distribute = (contractName: string = 'test', contractAddress: string = '', from: string = '') => {
    const { abi, address } = (contracts as any)[contractName]
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    // 发送交易，使用事件获取返回结果
    return contract.methods.distribute(contractAddress).send({ from })
}

// 调用一个合约的函数
const call = async () => {
    const { abi, address } = contracts['test']
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    const res = await contract.methods.get().call()
    // const res = await contract.methods.test('0x9a4244c1d438810f09f468dfc2ea4cf40ad93c10', '2').call()
    console.log(`---------->:call_test`, res)
}

// 发送一个合约函数请求
const send = () => {
    const { abi, address } = contracts['airdrop']
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    let user = store.state.moralis?.user.accounts[0]
    console.log(`---------->:user`, user)
    // console.log(`---------->日志输出:Moralis.Units.Token("0.5", "18")`, Moralis.Units.Token('0.5', '18'))
    // 发送交易，使用事件获取返回结果
    contract.methods
        .distribute('0x9d027E7fDFF8d5E194449CfC1B9275584F7624CE', [{ beneficiary: user, amount: `${7 * Math.pow(10, 18)}` }])
        // .addListing(contracts['GameItems']['address'], '1', 45)
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

// 设置合约访问白名单 主合约名，新增合约地址 ，发起人
const setApprovalForAll = async (contractName: string = 'test', contractAddress: string = '', from: string = '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC') => {
    if (!contractAddress || !from) {
        console.log(`---------->:参数异常{ contractName = 'test', contractAddress = '', from = '' }`, { contractName, contractAddress, from })
    }
    const { abi, address } = (contracts as any)[contractName]
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    const res = await contract.methods.setApprovalForAll(contractAddress, true).send({ from })
    console.log(`---------->:setApprovalForAll`, res)
}

// 上架
const addListing = () => {
    const { abi, address } = contracts['nftTreader']
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    // 发送交易，使用事件获取返回结果
    contract.methods
        .addListing(222, contracts['GameItems']['address'], '2')
        // .addListing(contracts['GameItems']['address'], '1', 45)
        .send({ from: '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC' })
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

// 购买
const purchase = () => {
    const { abi, address } = contracts['nftTreader']
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    // 发送交易，使用事件获取返回结果
    contract.methods
        .purchase(contracts['GameItems']['address'], '2', 1)
        // .addListing(contracts['GameItems']['address'], '1', 45)
        .send({ from: '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC' })
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
const safeTransferFrom = async (abi:any, address:any, TransferFrom:any, id:any, number:any) => {
    // console.log(abi, address, TransferFrom, id, number);
    const web3 = new Web3((window as any ).ethereum)
    const contract = new web3.eth.Contract(abi, address)
    let res = await contract.methods.safeTransferFrom(accounts.value, TransferFrom, id, number, '0x').send({ from: accounts.value }).then( (receipt:any) => {
        return receipt;
    }).catch((err:any) => {
        isApprovedForAll(abi, address);
    })
    // console.log(res, 'receipt');
    return res;
}

// 资产查询
const batchBalanceOf = async (abi:any, address:any) => {
    const web3 = new Web3((window as any ).ethereum)
    const contract = new web3.eth.Contract(abi, address)
    let res = await contract.methods.batchBalanceOf(accounts.value).call();
    return res;
}

// 读取JSON
let abi:any = ref(null);
const address:any = ref(null);
const dao_abi:any = ref(null);
const dao_address:any = ref(null);
const data:any = ref([]);
const readJSON = async (proxy:any) => {
    data.value = [];
    await proxy.$api.get('https://d2cimmz3cflrbm.cloudfront.net/ntflib/abi.json').then((data:any) => {
        abi.value = data;        
    })
    await proxy.$api.get('https://d2cimmz3cflrbm.cloudfront.net/ntflib/address.json').then((result:any) => {
        address.value = result[0].address;        
        batchBalanceOf(abi._rawValue, address.value).then((temp:any) => {
            let res = JSON.parse(JSON.stringify(temp));
            (function loop (index){
                proxy.$api.get(`https://api.cyberpop.online/server/${index || 0}`).then( (result:any) => {
                    
                    if(res[index] > 0){
                        data.value.push({
                            id: index,
                            type: 0,
                            number: res[index],
                            ...result,
                        })
                    }
                    if (++index<res.length) {
                        loop(index);
                    } else {
                        if( data.value.length !== 0 ){
                            store.dispatch('user/dataSumSearch',{data:data._rawValue, flag:0});
                            // console.log(data.value);
                            // console.log("over!!!!!");
                        }else{
                            store.dispatch('user/dataSumSearch',{flag:-1});
                            // console.log(data.value);
                            // console.log("nothing!!!!!");
                        }
                        dao(proxy);
                    }
                }).catch((err:any) => {
                    console.log(err); 
                })
            })(0)
        }) 
    })
    await proxy.$api.get('https://d2cimmz3cflrbm.cloudfront.net/daolib/abi.json').then((data:any) => {
        dao_abi.value = data;
    })
    await proxy.$api.get('https://d2cimmz3cflrbm.cloudfront.net/daolib/address.json').then((data:any) => {
        dao_address.value = data[0].address;
    })    
    store.dispatch('user/contractData', {abi, address, dao_abi, dao_address});
    return {abi, address, dao_abi, dao_address};
}


const dao = async (proxy:any) => {
    await batchBalanceOf(dao_abi._rawValue, dao_address.value).then((temp:any) => {
        let res = JSON.parse(JSON.stringify(temp));
        
        (function loop (index){
            proxy.$api.get(`https://api.cyberpop.online/weapons/${index + 1 + '01101'}`).then( (result:any) => {
                
                if(res[index] > 0){
                    data.value.push({
                        id: index,
                        type: 1,
                        number: res[index],
                        ...result,
                    })
                }
                if (++index < res.length) {
                    loop(index);
                } else {
                    if( data.value.length !== 0 ){
                        store.dispatch('user/dataSumSearch',{data:data._rawValue, flag:1});
                        // console.log(data.value);
                        // console.log("over2!!!!!");
                    }else{
                        store.dispatch('user/dataSumSearch',{flag:-1});
                        // console.log(data.value);
                        // console.log("nothing!!!!!");
                    }
                }
            })
        })(0)
    })
} 


export default {
    readJSON,
    safeTransferFrom,
    batchBalanceOf,
    login,
    hasMetaMask,
    getAccounts,
    getBalance,
    getContract,
    approve,
    setAirdrop,
    pool,
    eligible,
    distribute,
    setApprovalForAll,
    call,
    send,
    addListing,
    purchase,
}
