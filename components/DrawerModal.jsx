import React,{useState} from 'react'

const DrawerModal = ({handelOpen1}) => {
    const inittabs1=[
        {
            name:'my folders',
            active:true
        },
        {
            name:'shared with me',
            active:false
        },
        {
            name:'template',
            active:false
        },
    ]
    const [tabs1,setTabs1]=useState(inittabs1)
    return (
        <div className="flex">
            <div className="flex flex-col w-316">
                <div className="flex h-39 justify-around">
                    {
                        tabs1.map((item,i)=>(
                            <div onClick={()=>setTabs1(tabs1=>tabs1.map(item1=>item1.name===item.name?{...item1,active:true}:{...item1,active:false}))} className="flex items-center cursor-pointer justify-center w-full" style={{borderTop:item.active?'3px solid #7EC243':''}}>
                                <span key={i}  className={`capitalize text-12_20 ${item.active?'text-white':'text-pricol1'}`}>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-around items-center h-60" style={{padding:'12px 16px'}}>
                    <input type="text" className="rounded-md text-12_20 w-191 outline-none" style={{background:'rgba(0, 0, 0, 0.07)',padding:'8px 16px'}} placeholder="Search for folders..."/>
                    <span className="capitalize text-yellow text-13">+add folder</span>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between h-48 w-full">
                        <div className="flex">
                            {/* <div className="flex w-full h-12">
                            </div> */}
                            <img src="/folder.png" className="w-full h-12" alt="" />
                            <h1>Fodler 3</h1>
                        </div>
                        {/* <div className="flex">
                            <img src="/delete.png" className="h-12" alt="" />
                            <img src="/dots.png" className="h-12" alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrawerModal