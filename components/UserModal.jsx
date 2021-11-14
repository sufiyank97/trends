import React from 'react'

const UserModal = ({handelAccOpen}) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between">
                <h1 className="capitalize text-pricol1 text-12_20">my account</h1>
                <span className="cursor-pointer" onClick={()=>handelAccOpen()}>
                    <img src="/close.png"  alt="" />
                </span>
            </div>
            <div className="flex flex-col p-4">
                <div className="flex justify-between">
                    <div className="flex">
                        <img src="/user1.png" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-16 text-white capitalize">alex bunnetat</h1>
                        <h1 className="text-12_20 text-pricol1">alexbunnetat@gmail.com</h1>
                    </div>
                    <div className="flex cursor-pointer">
                        <img src="/edit.png" className="h-14" alt="" />
                    </div>
                </div>
                <div className="flex py-4">
                    <h1 className="capitalize text-12 text-yellow">change password</h1>
                </div>
                <div className="flex flex-col">
                    <h1 className="capitalize text-pricol1 text-12_20">teams</h1>
                    <select name="" id="" className="m-2 p-1 bg-transparent text-12_20 text-pricol1 border-2 rounded outline-none" style={{borderColor:'#8b8b95'}}>
                        <option value="">Select Team...</option>
                    </select>
                </div>
                <div className="flex flex-col mt-4">
                    <h1 className="capitalize text-pricol1 text-12_20">language setting</h1>
                    <select name="" id="" className="m-2 p-1 bg-transparent text-12_20 text-pricol1 border-2 rounded outline-none" style={{borderColor:'#8b8b95'}}>
                        <option value="">English</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default UserModal
