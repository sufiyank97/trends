import React from 'react'

const FolderOpen = ({handelFolOpen}) => {
    return (
        <div className="flex flex-col justify-around h-full" style={{padding:'0 24px'}}>
            <span className="text-24 text-black1 capitalize">create folder</span>
            <input type="text" placeholder="Folder name" className="outline-none text-grey3 text-16 w-full" style={{padding:'12px 16px',border:'1px solid #D9D9D9',borderRadius:'6px'}} />
            <div className="flex items-center self-end">
                <span onClick={()=>handelFolOpen()} className="capitalize cursor-pointer text-16 text-black2">cancel</span>
                <span className="ml-4 capitalize cursor-pointer text-16 text-white bg-secondary1" style={{borderRadius:'6px',padding:'10px 20px'}}>create folder</span>
            </div>
        </div>
    )
}

export default FolderOpen
