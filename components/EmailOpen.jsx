import React from 'react'

const EmailOpen = ({handelFolOpen}) => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
                <h1 className="text-24 capitalize text-black1 font-noto" style={{paddingBottom:'32px'}}>subscribe email alert</h1>
                <div className="flex">
                    <input type="email" name="" id="" className="bg-transparent outline-none w-289 h-48 border border-secondary11 py-2 px-3 text-pricol1 hover:border-secondary10 focus:text-black1 focus:border-yellow" placeholder="Enter Email" style={{borderRadius:'4px'}}/>
                    <select name="" id=""  className="bg-transparent outline-none w-211 h-48 border border-secondary11 py-2 px-3 text-pricol1 hover:border-secondary10 focus:text-black1 focus:border-yellow" style={{borderRadius:'4px',marginLeft:'20px'}} placeholder="Select how often">
                        <option className="op1" selected disabled value="">Select how often</option>
                        <option className="op1" value="">Never</option>
                        <option className="op1" value="">Daily</option>
                        <option className="op1" value="">Weekly</option>
                        <option className="op1" value="">Monthly</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-end">
                <span className="bg-transparent hover:bg-greylight focus:bg-greylight1 active:bg-greylight1 cursor-pointer w-75 h-42 flex items-center justify-center" style={{marginRight:'16px',padding: '10px 20px',borderRadius:'6px'}} onClick={()=>handelFolOpen()}>
                    <h2 className="text-16_22 text-black2 font-noto">Cancel</h2>
                </span>
                <span className="bg-secondary1 hover:bg-secondary111 focus:bg-secondary112 cursor-pointer w-75 h-42 flex items-center justify-center" style={{padding: '10px 20px',borderRadius:'6px'}} onClick={()=>handelFolOpen()}>
                    <h2 className="text-16_22 text-white font-noto">Save</h2>
                </span>
            </div>
        </div>
    )
}

export default EmailOpen
