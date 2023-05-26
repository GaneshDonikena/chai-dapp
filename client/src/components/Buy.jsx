import React from "react"
import { ethers } from "ethers"

function Buy({ state }) {
    const buyChai = async (event) => {
        event.preventDefault()
        const { contract } = state
        const name = document.querySelector("#name").value
        const message = document.querySelector("#message").value
        const amount = { value: ethers.utils.parseEther("0.0001") }
        const transaction = await contract.buyChai(name, message, amount)
        await transaction.wait()
        alert("transaction is successful")
        window.location.reload()
    }

    return (
        <>
            <form onSubmit={buyChai}>
                <label>Name: </label>
                <input id="name"></input>
                <br />
                <label>Message: </label>
                <input id="message"></input>
                <p></p>
                <button>Pay</button>
            </form>
        </>
    )
}

export default Buy
