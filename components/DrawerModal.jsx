import React,{useState,useContext,useEffect,Fragment} from 'react'
import StripeDashboard from './StripeDashboard'
import FolderOpen from './FolderOpen'
import DashboardOpen from './DashboardOpen'
import Modal from 'react-modal'
import AppStore from './store'
import {FOLDERS_DATA} from './AppConstants'
const DrawerModal = ({handelOpen1}) => {
    const {state,dispatch}=useContext(AppStore)
    const {folders}=state
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
    const [myFolders,setMyFolders]=useState([])
    useEffect(()=>{
        if(folders.length>0){
            setMyFolders(folders)
        }
    },[folders])
    console.log(folders,'folders')
    console.log(myFolders,'myFolders')
    const handleDashboardStatus=(item,item1)=>{
        const folders=[...myFolders]
        dispatch({
            type:FOLDERS_DATA,
            payload:folders.map(folder=>{
                if(folder.name===item.name){
                    const dashboardF=folder.dashboards.map(dashboard=>{
                        if(dashboard.name===item1.name){
                            dashboard['status']=!dashboard['status']
                            return dashboard
                        }else{
                            dashboard['status']=false
                            return dashboard
                        }
                    })
                    folder['dashboards']=dashboardF
                    return folder
                }else{
                    return folder
                }
            })
        })
    }
    const handleDashboardDelete=(item,item1)=>{
        const folders=[...myFolders]
        dispatch({
            type:FOLDERS_DATA,
            payload:folders.map(folder=>{
                if(folder.name===item.name){
                    const dashboardF=folder.dashboards.filter(dashboard=>dashboard.name!=item1.name)
                    folder['dashboards']=dashboardF
                    return folder
                }else{
                    return folder
                }
            })
        })
    }
    
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
                        <input onChange={(e)=>{
                                if(!e.target.value){
                                    setMyFolders(folders)
                                }else{
                                    setMyFolders(oldArray=>oldArray.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase())))
                                }
                            }} type="text" className="text-12_20 w-191 outline-none text-white" style={{borderRadius:'50px',background:'rgba(0, 0, 0, 0.07)',padding:'8px 16px'}} placeholder="Search for folders..."/>
                        <span onClick={()=>setOpenFolder(true)} className="cursor-pointer capitalize text-yellow text-13">+add folder</span>
                    </div>
                    <div className="flex flex-col w-full">
                        {
                            myFolders.map((item,i,arr)=>(
                                <div  key={i} className={`flex items-center px-4 cursor-pointer items-center justify-between h-48 w-full ${item.status?'bg-pri1':''}`}>
                                    <div onClick={()=>{
                                    if(myFolders.length!=1){
                                        // setMyFolders(folders=>folders.map(item1=>item1.name===item.name?{...item1,status:true}:{...item1,status:false}))
                                        dispatch({
                                            type:FOLDERS_DATA,
                                            payload:folders.map(item1=>item1.name===item.name?{...item1,status:true}:{...item1,status:false})
                                        })
                                    }
                                }} className="flex items-center w-full" style={{height:'100%'}}>
                                        <img src="/folder.png" className="h-15" alt="" />
                                        <h1 className="text-14 text-white px-2">{item.name}</h1>
                                    </div>
                                    <div className="flex h-20">
                                        <img src="/delete.png" className="w-full pr-2" alt="" onClick={()=>{
                                            if(myFolders.length===1){
                                                alert('Cant able to delete')
                                            }else{
                                                var arr=[]
                                                const cc=folders.filter(folder=>folder.name!=item.name)
                                                cc[0]['status']=true
                                                arr.push(cc)
                                                console.log(cc)
                                                dispatch({
                                                    type:FOLDERS_DATA,
                                                    payload:cc
                                                })
                                            }
                                        }} />
                                        <img src="/dots.png" className="w-full" alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col w-633 bg-pri1 overflow-hidden">
                    <div className="flex justify-between items-center h-60" style={{padding:'0 24px'}}>
                        <span onClick={()=>setOpenDashboard(true)} className="cursor-pointer capitalize text-yellow text-13">+add dashboard</span>
                        <div className="flex items-center">
                            <input onChange={(e)=>{
                                console.log(e.target.value)
                                if(!e.target.value){
                                    setMyFolders(folders)
                                }else{
                                    setMyFolders(oldArray=>oldArray.map(item=>item.status?{...item,dashboards:item.dashboards.filter(dashboard=>dashboard.name.toLowerCase().includes(e.target.value.toLowerCase()))}:{...item}))
                                }
                            }} className="w-240 h-36 text-13 outline-none text-white" style={{borderRadius:'50px',padding:'8px 16px',background:'rgba(0, 0, 0, 0.05)'}} type="text" placeholder="Search for dashboard.."/>
                            <label className="flex items-center ml-4">
                                <input type="checkbox" onChange={(e)=>{
                                dispatch({
                                    type:FOLDERS_DATA,
                                    payload:folders.map(folder=>{
                                        const dashboardF=folder.dashboards.map(dashboard=>{
                                            dashboard['status']=e.target.checked
                                            return dashboard
                                        })
                                        folder['dashboards']=dashboardF
                                        return folder
                                    })
                                })
                            }} />
                                <span  className="ml-2 text-12_20 text-pricol1 capitalize">expand all</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-auto" style={{padding:'0px 24px'}}>
                    {
                        myFolders.filter(item=>item.status).map((item,i)=>(
                            item.dashboards.map((item1,i1)=>(
                            <Fragment key={i1}>
                                <StripeDashboard active={item1.status} data={item1} handleDashboardStatus={()=>handleDashboardStatus(item,item1)} handleDashboardDelete={()=>handleDashboardDelete(item,item1)}/>
                            </Fragment>
                            ))
                        ))
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DrawerModal