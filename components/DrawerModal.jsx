import React,{useState} from 'react'
import StripeDashboard from './StripeDashboard'
import FolderOpen from './FolderOpen'
import DashboardOpen from './DashboardOpen'
import Modal from 'react-modal'
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
    const CUSTOM_STYLING={
        overlay:{
            background: 'rgba(51, 52, 73, 0.8)',
            // opacity: "0.95",
            zIndex:'11111'
        },
        content:{
            position:'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform:'translate(-50%,-50%)',
            width: '699px',
            height: '315px',
            background: '#fff',
            borderRadius:'16px',
            boxSizing: 'border-box',
            boxShadow: '2px 4px 24px 2px rgba(0, 0, 0, 0.25)',
            padding: '0px',
        }
    }
    const [openFolder,setOpenFolder]=useState(false)
    const [openDashboard,setOpenDashboard]=useState(false)
    return (
        <>
            <Modal
                isOpen={openFolder}
                style={CUSTOM_STYLING}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={()=>setOpenFolder(false)}
                ariaHideApp={false}
            >
                <FolderOpen handelFolOpen={()=>setOpenFolder(false)}/>
            </Modal>
            <Modal
                isOpen={openDashboard}
                style={CUSTOM_STYLING}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={()=>setOpenDashboard(false)}
                ariaHideApp={false}
            >
                <DashboardOpen handelDashOpen={()=>setOpenDashboard(false)}/>
            </Modal>
            <div className="flex" style={{height:'inherit'}}>
                <div className="flex flex-col w-316">
                    <div className="flex h-39 justify-around">
                        {
                            tabs1.map((item,i)=>(
                                <div key={i} onClick={()=>setTabs1(tabs1=>tabs1.map(item1=>item1.name===item.name?{...item1,active:true}:{...item1,active:false}))} className="flex items-center cursor-pointer justify-center w-full" style={{borderTop:item.active?'3px solid #7EC243':''}}>
                                    <span   className={`capitalize text-12_20 ${item.active?'text-white':'text-pricol1'}`}>{item.name}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex justify-around items-center h-60" style={{padding:'12px 16px'}}>
                        <input type="text" className="text-12_20 w-191 outline-none" style={{borderRadius:'50px',background:'rgba(0, 0, 0, 0.07)',padding:'8px 16px'}} placeholder="Search for folders..."/>
                        <span onClick={()=>setOpenFolder(true)} className="cursor-pointer capitalize text-yellow text-13">+add folder</span>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex items-center px-4 cursor-pointer items-center justify-between h-48 w-full">
                            <div className="flex items-center">
                                <img src="/folder.png" className="h-15" alt="" />
                                <h1 className="text-14 text-white px-2">Fodler 3</h1>
                            </div>
                            <div className="flex h-20">
                                <img src="/delete.png" className="w-full pr-2" alt="" />
                                <img src="/dots.png" className="w-full" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-633 bg-pri1 ">
                    <div className="flex justify-between items-center h-60" style={{padding:'0 24px'}}>
                        <span onClick={()=>setOpenDashboard(true)} className="cursor-pointer capitalize text-yellow text-13">+add dashboard</span>
                        <div className="flex items-center">
                            <input className="w-240 h-36 text-13 outline-none text-white" style={{borderRadius:'50px',padding:'8px 16px',background:'rgba(0, 0, 0, 0.05)'}} type="text" placeholder="Search for dashboard.."/>
                            <label className="flex items-center ml-4">
                                <input type="checkbox" />
                                <span  className="ml-2 text-12_20 text-pricol1 capitalize">expand all</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col " style={{padding:'0px 24px'}}>
                        <StripeDashboard/>
                        <StripeDashboard/>
                        <StripeDashboard active={true}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DrawerModal