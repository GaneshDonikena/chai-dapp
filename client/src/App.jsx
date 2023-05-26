import { useState, useEffect } from "react"
import abi from "./contractJson/chai.json"
import { ethers } from "ethers"
import Memos from "./components/Memos"
import Buy from "./components/Buy"
import chai from "./chai.png"
import "./App.css"

function App() {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    })

    const [account, setAccount] = useState("Not connected")

    useEffect(() => {
        const template = async () => {
            const contractAddress = "0x089D2629434e66B554b5Df23f643beD04C420dd0"
            const contractABI = abi.abi
            //Metamask
            //1.In order to make transactions on goerli testnet
            //2.Metamask consists of infura api which helps in connecting to blockchain
            try {
                const { ethereum } = window

                const account = await ethereum.request({
                    method: "eth_requestAccounts",
                })

                window.ethereum.on("accountsChanged", () => {
                    window.location.reload()
                })
                setAccount(account)

                const provider = new ethers.providers.Web3Provider(ethereum)
                const signer = provider.getSigner()

                const contract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    signer
                )
                console.log(contract)
                setState({ provider, signer, contract })
            } catch (error) {
                console.log(error)
            }
        }
        template()
    }, [])
    return (
        <>
            <div>
                <img src={chai} className="img-fluid" alt=".." width="50%" />
                <p style={{ marginTop: "10px", marginLeft: "45%" }}>
                    <small>Connected Account - {account}</small>
                </p>

                <Buy state={state} />
                <Memos state={state} />
            </div>
        </>
    )
}

export default App
