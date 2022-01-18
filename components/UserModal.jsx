import React from 'react'
import Close from '../public/ic-close.svg'
import Edit from '../public/ic-edit.svg'
const UserModal = ({handelAccOpen}) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between">
                <h1 className="capitalize text-secondary6 text-12_20 font-noto">my account</h1>
                <Close className="cursor-pointer svg1" onClick={()=>handelAccOpen()}/>
            </div>
            <div className="flex flex-col p-3">
                <div className="flex justify-between">
                    <div className="flex">
                        <img src="/user1.png" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-16 text-white capitalize">alex bunnetat</h1>
                        <h1 className="text-12_20 text-secondary6">alexbunnetat@gmail.com</h1>
                    </div>
                    <div className="flex cursor-pointer">
                        <Edit className="cursor-pointer svg1"/>
                    </div>
                </div>
                <div className="flex py-4">
                    <h1 className="capitalize text-12 text-yellow font-noto">change password</h1>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h1 className="capitalize text-secondary6 text-12_20 font-noto">teams</h1>
                    <select name="" id="" className="m-2 px-3 py-2 bg-transparent text-12_20 text-pricol1 border-2 rounded outline-none" style={{borderColor:'#8b8b95'}}>
                        <option value="">Select Team...</option>
                    </select>
                </div>
                <div className="flex flex-col mt-4">
                    <h1 className="capitalize text-secondary6 text-12_20 font-noto">language setting</h1>
                    <select name="" id="" className="m-2 px-3 py-2 bg-transparent text-12_20 text-pricol1 border-2 rounded outline-none" style={{borderColor:'#8b8b95'}}>
                        <option value="">English</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default UserModal
